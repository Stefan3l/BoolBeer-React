import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Hero from "../components/ui/Hero";

//import components
import SectionCarousel from "../components/SectionCarousel";
import Whatsapp from "../components/ui/Whatsapp";
import ButtonUp from "../components/ui/ButtonUp";
import Card from "../components/ui/Card";
import SectionContatta from "../components/SectionContatta";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative">
      <Header />

      <Hero />

      <div data-aos="fade-up">
        <SectionCarousel />
      </div>
      <div data-aos="fade-up">
        <SectionContatta />
      </div>
      <div data-aos="fade-up">
        <Card />
      </div>
      <Whatsapp />
      <ButtonUp />
    </div>
  );
}
