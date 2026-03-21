import Hero from "../components/home/Hero/Hero";
import FeaturedItems from "../components/home/FeaturedItems/FeaturedItems";
import About from "../components/home/About/About";
import ReserveTable from "../components/home/ReserveTable/ReserveTable";
import Contact from "../components/home/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedItems />
      <About />
      <ReserveTable />
      <Contact />
    </div>
  );
}
