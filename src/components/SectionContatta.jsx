export default function SectionContatta() {
  return (
    <section
      className="relative h-[600px] md:h-[400px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('../images/09.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
        <p className="text-4xl font-bold mb-6">Vuoi saperne di più?</p>
        <button className="px-8 py-3 bg-[#CBB27C] hover:bg-[#b89d64] rounded-lg text-lg font-semibold transition-colors cursor-pointer">
          Contattaci
        </button>
      </div>
    </section>
  );
}
