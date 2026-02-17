import styles from "./home.module.scss";
import Hero from "./homepage/Hero/Hero";
import FeaturedItems from "./homepage/FeaturedItems/FeaturedItems";
import About from "./homepage/About/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <FeaturedItems />
      <About />
    </div>
  );
}
