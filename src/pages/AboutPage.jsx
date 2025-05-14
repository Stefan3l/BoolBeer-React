import { useEffect, useRef } from "react";

//import components
import Hero from "../components/ui/Hero";
import Whatsapp from "../components/ui/Whatsapp";
import ButtonUp from "../components/ui/ButtonUp";

export default function AboutPage() {
  const aboutRef = useRef(null);
  useEffect(() => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <>
      <Hero />
      <div
        className="flex flex-col-reverse md:flex-col py-10 px-4 max-w-7xl mx-auto"
        ref={aboutRef}
      >
        <div className="flex flex-col justify-center mb-8">
          <p className="text-lg leading-relaxed text-gray-800 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            🍺 Chi siamo – BoolBeer Benvenuti su BoolBeer, dove la passione per
            la birra artigianale incontra la qualità e la tradizione. BoolBeer
            nasce dall'idea di creare un prodotto autentico, capace di
            raccontare una storia ad ogni sorso. Utilizziamo solo ingredienti
            selezionati, lavorati con cura e attenzione per offrirti una birra
            dal gusto unico, ricca di carattere e personalità. Ogni bottiglia
            BoolBeer è il risultato di ricerca, dedizione e amore per l'arte
            birraia. Che tu sia un intenditore o semplicemente un amante della
            buona birra, su BoolBeer troverai una selezione pensata per
            soddisfare ogni palato. Unisciti alla nostra community di
            appassionati e scopri il piacere di una birra fatta come una volta,
            ma con uno sguardo al futuro. BoolBeer – Più di una birra,
            un'esperienza.
          </p>
        </div>
        <img
          src="../images/28.png"
          alt="About"
          className="w-full max-w-3xl mx-auto mb-8 rounded-lg shadow-lg"
        />
      </div>
      <Whatsapp />
      <ButtonUp />
    </>
  );
}
