import { useState, useEffect } from "react";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    { src: "../images/width-1400px/img1.jpg", alt: "Beer 1" },
    { src: "../images/width-1400px/img2.png", alt: "Beer 2" },
    { src: "../images/width-1400px/img3.png", alt: "Beer 3" },
    { src: "../images/width-1400px/img4.png", alt: "Beer 4" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="w-full flex justify-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1600px] w-full relative">
        <div className="w-full h-screen overflow-hidden">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        {isHovered && (
          <>
            <button
              onClick={handlePrevClick}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 animate-slideInLeft text-white p-4 transition-all text-4xl drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] hover:scale-125 cursor-pointer"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={handleNextClick}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-0 animate-slideInRight text-white p-4 transition-all text-4xl drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] hover:scale-125 cursor-pointer"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
