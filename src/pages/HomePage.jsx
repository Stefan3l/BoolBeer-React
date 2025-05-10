import Header from "../components/Header";
import Hero from "../components/ui/Hero";

//import components
import SectionCarousel from "../components/SectionCarousel";

export default function HomePage() {
  return (
    <div className="relative">
      <Header />

      <Hero />
      <SectionCarousel />
    </div>
  );
}
