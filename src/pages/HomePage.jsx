import Header from "../components/Header";
import Hero from "../components/ui/Hero";

//import components
import SectionCarousel from "../components/SectionCarousel";
import Whatsapp from "../components/ui/Whatsapp";
import ButtonUp from "../components/ui/ButtonUp";
import Card from "../components/ui/Card";
import SectionContatta from "../components/SectionContatta";

export default function HomePage() {
  return (
    <div className="relative">
      <Header />

      <Hero />
      <SectionCarousel />
      <Whatsapp />
      <ButtonUp />
      <SectionContatta />
      <Card />
    </div>
  );
}
