import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-[40]">
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0D2227] h-[120px] clip-header relative"
            : "bg-transparent h-[100px]"
        }`}
      >
        <div className="flex justify-between items-start py-3 px-4 h-full text-white">
          <div
            className={`absolute left-4 z-[60] ${
              isScrolled ? "-top-2" : "top-0"
            }`}
          >
            <img
              src="../images/logo-beer.png"
              alt="Logo"
              className={`transition-all duration-300 ${
                isScrolled ? "w-64" : "w-32"
              }`}
            />
          </div>
          <div className={`ml-auto ${isScrolled ? "mt-10" : ""}`}>
            <ul className="flex list-unstyled gap-4 mr-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
