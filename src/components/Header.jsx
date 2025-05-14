import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-[40]">
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled && window.innerWidth > 768
            ? "bg-[#0D2227] h-[140px] clip-header relative pb-6"
            : "bg-[#0D2227] md:bg-transparent h-[70px] md:h-[100px]"
        }`}
      >
        <div className="flex justify-between items-center py-3 px-4 h-full text-white">
          <div
            className={`absolute left-4 z-[60] ${
              isScrolled && window.innerWidth > 768 ? "-top-2" : "top-0"
            }`}
          >
            <a href="/">
              <img
                src="../images/logo-beer.png"
                alt="Logo"
                className={`transition-all duration-300 ${
                  isScrolled && window.innerWidth > 768
                    ? "w-64"
                    : "w-24 md:w-32"
                }`}
              />
            </a>
          </div>

          {/* Burger Menu Button */}
          <button
            className="md:hidden ml-auto z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-[2px] bg-white mb-1"></div>
            <div className="w-6 h-[2px] bg-white mb-1"></div>
            <div className="w-6 h-[2px] bg-white"></div>
          </button>

          {/* Desktop Menu */}
          <div
            className={`hidden md:block ml-auto ${isScrolled ? "mt-8" : ""}`}
          >
            <ul className="flex list-unstyled gap-4 mr-4">
              <li>
                <a
                  href="/"
                  className="hover:text-[#CBB27C] transition-all  inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[#CBB27C] transition-all  inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#CBB27C] transition-all  inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
            md:hidden fixed top-0 right-0 h-screen w-64 bg-[#0D2227] 
            transform transition-transform duration-300 ease-in-out 
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          >
            <ul className="flex flex-col items-center gap-4 pt-20">
              <li>
                <a
                  href="/"
                  className="hover:text-[#CBB27C] transition-all  inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[#CBB27C] transition-all  inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#CBB27C] transition-all  inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
