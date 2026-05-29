import { Header, Footer, BlobBackground } from '../components/common';
import {
  Hero,
  About,
  Culture,
  Jobs,
  Environment,
  NewGraduate,
  Blog,
} from '../components/sections';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.page}>
      <BlobBackground />
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Culture />
        <Jobs />
        <Environment />
        <NewGraduate />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
