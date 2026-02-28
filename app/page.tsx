import styles from "./home.module.scss";
import Hero from "./homepage/Hero/Hero";
import FeaturedItems from "./homepage/FeaturedItems/FeaturedItems";
import About from "./homepage/About/About";
import ReserveTable from "./homepage/ReserveTable/ReserveTable";
import Contact from "./homepage/Contact/Contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <FeaturedItems />
      <About />
      <ReserveTable />
      <Contact />
    </div>
  );
}
