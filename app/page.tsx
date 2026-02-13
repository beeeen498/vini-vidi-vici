import styles from "./home.module.scss";
import Hero from "./homepage/Hero/Hero";
import About from "./homepage/About/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <About />
    </div>
  );
}
