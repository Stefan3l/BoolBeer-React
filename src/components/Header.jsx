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
    <div
      className={`fixed w-full z-50 flex justify-between items-center py-5 transition-all duration-300 text-white ${
        isScrolled ? "bg-[#0D2227]" : "bg-transparent"
      }`}
    >
      <div>
        <img
          src="../images/logo-beer.png"
          alt="Logo"
          className={`transition-all duration-300 ${
            isScrolled ? "w-36" : "w-32"
          }`}
        />
      </div>
      <div>
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
  );
}
