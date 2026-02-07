import styles from "./home.module.scss";
import Hero from "./homepage/Hero/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
