import { useEffect, useRef } from "react";

//import components
import Whatsapp from "../components/ui/Whatsapp";
import ButtonUp from "../components/ui/ButtonUp";
import CardDetaills from "../components/ui/CardDetaills";
import SectionContatta from "../components/SectionContatta";
import Hero from "../components/ui/Hero";

export default function BeerPage() {
  const cardRef = useRef(null);

  useEffect(() => {
    cardRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Hero />
      <div ref={cardRef}>
        <CardDetaills />
      </div>
      <SectionContatta />
      <Whatsapp />
      <ButtonUp />
    </>
  );
}
