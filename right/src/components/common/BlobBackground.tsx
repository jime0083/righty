import { useEffect, useRef, useCallback } from 'react';
import styles from './BlobBackground.module.css';

// Perlin Noise実装
class PerlinNoise {
  private permutation: number[];
  private p: number[];

  constructor(seed: number = Math.random()) {
    this.permutation = [];
    for (let i = 0; i < 256; i++) {
      this.permutation[i] = i;
    }

    // Fisher-Yatesシャッフル
    for (let i = 255; i > 0; i--) {
      const j = Math.floor((seed * (i + 1)) % (i + 1));
      [this.permutation[i], this.permutation[j]] = [
        this.permutation[j],
        this.permutation[i],
      ];
    }

    this.p = [...this.permutation, ...this.permutation];
  }

  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  private lerp(a: number, b: number, t: number): number {
    return a + t * (b - a);
  }

  private grad(hash: number, x: number, y: number): number {
    const h = hash & 3;
    const u = h < 2 ? x : y;
    const v = h < 2 ? y : x;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  noise2D(x: number, y: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);

    const u = this.fade(x);
    const v = this.fade(y);

    const A = this.p[X] + Y;
    const B = this.p[X + 1] + Y;

    return this.lerp(
      this.lerp(this.grad(this.p[A], x, y), this.grad(this.p[B], x - 1, y), u),
      this.lerp(
        this.grad(this.p[A + 1], x, y - 1),
        this.grad(this.p[B + 1], x - 1, y - 1),
        u
      ),
      v
    );
  }

  // フラクタルブラウン運動（複数オクターブのノイズ）
  fbm(x: number, y: number, octaves: number = 4): number {
    let value = 0;
    let amplitude = 1;
    let frequency = 1;
    let maxValue = 0;

    for (let i = 0; i < octaves; i++) {
      value += amplitude * this.noise2D(x * frequency, y * frequency);
      maxValue += amplitude;
      amplitude *= 0.5;
      frequency *= 2;
    }

    return value / maxValue;
  }
}

interface BlobConfig {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  baseRadius: number;
  color: string;
  noiseOffset: number;
  speed: number;
}

const BlobBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const blobsRef = useRef<BlobConfig[]>([]);
  const perlinRef = useRef<PerlinNoise>(new PerlinNoise(42));
  const timeRef = useRef(0);

  // ブロブの初期化
  const initBlobs = useCallback((width: number, height: number) => {
    blobsRef.current = [
      {
        x: width * 0.7,
        y: height * 0.3,
        targetX: width * 0.7,
        targetY: height * 0.3,
        baseRadius: Math.min(width, height) * 0.35,
        color: '#e76746',
        noiseOffset: 0,
        speed: 0.8,
      },
      {
        x: width * 0.3,
        y: height * 0.7,
        targetX: width * 0.3,
        targetY: height * 0.7,
        baseRadius: Math.min(width, height) * 0.25,
        color: '#f5a080',
        noiseOffset: 100,
        speed: 0.6,
      },
    ];
  }, []);

  // ブロブの描画
  const drawBlob = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      blob: BlobConfig,
      time: number,
      perlin: PerlinNoise
    ) => {
      const points = 100;
      const angleStep = (Math.PI * 2) / points;

      ctx.beginPath();

      for (let i = 0; i <= points; i++) {
        const angle = i * angleStep;

        // Perlin Noiseで有機的な形状を生成
        const noiseValue = perlin.fbm(
          Math.cos(angle) * 2 + blob.noiseOffset,
          Math.sin(angle) * 2 + blob.noiseOffset,
          3
        );

        const timeNoise = perlin.fbm(
          Math.cos(angle) * 1.5 + time * blob.speed,
          Math.sin(angle) * 1.5 + blob.noiseOffset,
          2
        );

        // 半径を変動させる
        const radiusVariation = 0.3;
        const radius =
          blob.baseRadius * (1 + noiseValue * radiusVariation + timeNoise * 0.15);

        const x = blob.x + Math.cos(angle) * radius;
        const y = blob.y + Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();

      // グラデーション塗りつぶし
      const gradient = ctx.createRadialGradient(
        blob.x,
        blob.y,
        0,
        blob.x,
        blob.y,
        blob.baseRadius * 1.5
      );
      gradient.addColorStop(0, blob.color);
      gradient.addColorStop(0.5, blob.color + 'cc');
      gradient.addColorStop(1, blob.color + '00');

      ctx.fillStyle = gradient;
      ctx.fill();
    },
    []
  );

  // アニメーションループ
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const perlin = perlinRef.current;

    // キャンバスをクリア
    ctx.clearRect(0, 0, width, height);

    timeRef.current += 0.005;

    // マウス位置に向かってブロブを移動
    blobsRef.current.forEach((blob, index) => {
      // ターゲット位置を更新（マウス位置 + オフセット）
      const offsetX = index === 0 ? 100 : -100;
      const offsetY = index === 0 ? -50 : 50;
      blob.targetX = mouseRef.current.x * width + offsetX;
      blob.targetY = mouseRef.current.y * height + offsetY;

      // スムーズに追従（イージング）
      const ease = 0.02;
      blob.x += (blob.targetX - blob.x) * ease;
      blob.y += (blob.targetY - blob.y) * ease;

      // ブロブを描画
      drawBlob(ctx, blob, timeRef.current, perlin);
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [drawBlob]);

  // マウス移動ハンドラ
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };
  }, []);

  // リサイズハンドラ
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    initBlobs(rect.width, rect.height);
  }, [initBlobs]);

  useEffect(() => {
    handleResize();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [handleMouseMove, handleResize, animate]);

  return (
    <div className={styles.blobContainer}>
      <canvas ref={canvasRef} className={styles.blobCanvas} />
    </div>
  );
};

export default BlobBackground;
