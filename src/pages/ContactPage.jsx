import { useEffect, useRef } from "react";

//import components
import Hero from "../components/ui/Hero";
import Whatsapp from "../components/ui/Whatsapp";
import ButtonUp from "../components/ui/ButtonUp";

export default function ContactPage() {
  const cardRef = useRef(null);
  useEffect(() => {
    cardRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <Hero />
      <section className="py-16 px-4 bg-gray-100" ref={cardRef}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Contattaci</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Informazioni di contatto
              </h3>
              <p>📍 Via Example, 123 - Città</p>
              <p>📞 +39 123 456 7890</p>
              <p>✉️ info@boolbeer.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Invia un messaggio</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                />
                <textarea
                  placeholder="Messaggio"
                  className="w-full p-2 border rounded h-32"
                ></textarea>
                <button
                  type="submit"
                  className="bg-amber-600 text-white px-6 py-2 rounded cursor-pointer hover:bg-amber-700"
                >
                  Invia
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Whatsapp />
      <ButtonUp />
    </>
  );
}
