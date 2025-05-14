export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('../images/404.jpg')] bg-cover bg-center bg-no-repeat">
      <a
        href="/"
        className="px-8 py-4 bg-[#CBB27C] hover:bg-[#b89d64] text-white text-xl font-bold rounded-full  transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-white/20"
      >
        Torna alla Home
      </a>
    </div>
  );
}
