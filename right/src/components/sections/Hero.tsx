import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // ノイズアニメーションの初期化
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // グラデーション背景を描画
    const drawGradient = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.7,
        canvas.height * 0.3,
        0,
        canvas.width * 0.7,
        canvas.height * 0.3,
        canvas.width * 0.8
      );
      gradient.addColorStop(0, 'rgba(231, 103, 70, 0.3)');
      gradient.addColorStop(0.5, 'rgba(231, 103, 70, 0.1)');
      gradient.addColorStop(1, 'rgba(245, 240, 232, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // ノイズエフェクト
    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 15;
        data[i] = noise;     // R
        data[i + 1] = noise; // G
        data[i + 2] = noise; // B
        data[i + 3] = 8;     // A (透明度を低く)
      }

      ctx.putImageData(imageData, 0, 0);
    };

    let animationId: number;
    let lastTime = 0;
    const fps = 10; // ノイズのFPS

    const animate = (time: number) => {
      if (time - lastTime > 1000 / fps) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGradient();
        drawNoise();
        lastTime = time;
      }
      animationId = requestAnimationFrame(animate);
    };

    // 初期ロードアニメーション
    setTimeout(() => {
      setIsLoaded(true);
      animationId = requestAnimationFrame(animate);
    }, 300);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.gradientCircle} />

      <div className={styles.content}>
        <div className={`${styles.textWrapper} ${isLoaded ? styles.loaded : ''}`}>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>つくりたいのは、</span>
            <span className={styles.titleLine}>
              <span className={styles.highlight}>「つながり」</span>の先にある価値
            </span>
          </h1>

          <p className={styles.description}>
            私たちライティは、人と人、人と企業、企業と企業を
            「つながり」で結び、その先にある新しい価値を創造しています。
            テクノロジーの力で、日常に小さな喜びを届ける。
            そんな未来を一緒につくりませんか。
          </p>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
