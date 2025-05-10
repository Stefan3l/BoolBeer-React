import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SectionCarousel() {
  const [beers, setBeers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/beers")
      .then((response) => {
        //creo una variabile per salvare i dati
        //verifico se i dati sono un array o un oggetto
        let beerData = [];
        if (Array.isArray(response.data)) {
          beerData = response.data;
        } else if (response.data && Array.isArray(response.data.data)) {
          beerData = response.data.data;
        } else {
          setError("Invalid data format");
          return;
        }

        //filtro i dati per ottenere solo le birre con rating maggiore di 0
        const topBeers = beerData
          .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
          .slice(0, 14);

        setBeers(topBeers);
      })
      .catch((error) => {
        console.error("Products not found", error);
      });
  }, []);

  // funzione per aggiornare le schede visibili in base alla larghezza della finestra
  useEffect(() => {
    const updateVisibleCards = () => {
      if (beers.length > 0) {
        const width = window.innerWidth;
        if (width < 768) {
          // mobile
          setVisibleCards(beers.slice(0, 1));
        } else if (width < 1024) {
          // tablet
          setVisibleCards(beers.slice(0, 2));
        } else {
          // desktop
          setVisibleCards(beers.slice(0, 4));
        }
      }
    };

    // inizializza le schede visibili in base alla larghezza della finestra
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, [beers]);

  // funzione per aggiornare le schede visibili ogni 3 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCards((prevCards) => {
        const newCards = [...prevCards];
        // rimuovi la prima carta e aggiungi la prossima
        newCards.shift();
        const nextIndex =
          (beers.indexOf(newCards[newCards.length - 1]) + 1) % beers.length;
        newCards.push(beers[nextIndex]);
        return newCards;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [beers]);

  // funzione per passare alla slide precedente
  const handlePrevSlide = () => {
    setVisibleCards((prevCards) => {
      const newCards = [...prevCards];
      const lastIndex = beers.indexOf(newCards[0]) - 1;
      const prevIndex = lastIndex < 0 ? beers.length - 1 : lastIndex;
      newCards.pop();
      newCards.unshift(beers[prevIndex]);
      return newCards;
    });
  };

  // funzione per passare alla slide successiva
  const handleNextSlide = () => {
    setVisibleCards((prevCards) => {
      const firstCardIndex = beers.indexOf(prevCards[0]);
      const numVisibleCards = prevCards.length;
      const newCards = [];

      // Aggiungi la prima carta alla fine dell'array
      for (let i = 0; i < numVisibleCards; i++) {
        const nextIndex = (firstCardIndex + i + 1) % beers.length;
        newCards.push(beers[nextIndex]);
      }

      return newCards;
    });
  };

  // funzione per formattare il contenuto alcolico
  const formatAlcoholContent = (value) => {
    if (!value) return "0.0";
    const numberValue = parseFloat(value);
    return numberValue > 10
      ? (numberValue / 10).toFixed(1)
      : numberValue.toFixed(1);
  };

  const toggleFavorite = (beerId) => {
    setFavorites((prev) => ({
      ...prev,
      [beerId]: !prev[beerId],
    }));
  };

  const renderStars = (rating) => {
    const stars = [];
    const ratingNum = parseFloat(rating) || 0;
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fa-solid fa-star ${
            i <= ratingNum ? "text-[#CBB27C]" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 px-2 lg:px-0">
      <div className="w-full lg:w-1/3 lg:h-full">
        <img
          src="../images/Prod-Promo_Nenea-Iancu-Blonda-Sp.png"
          alt="Promo"
          className="w-full h-auto lg:h-full object-contain"
        />
      </div>
      <div className="w-full lg:w-2/3">
        <div className="overflow-hidden">
          <div className="flex gap-4 transition-all duration-500 ease-in-out relative">
            {visibleCards.map((beer) => (
              <div
                key={beer.id}
                className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 p-4 border rounded-lg shadow-xl transform transition-all duration-500 relative"
              >
                <i
                  className={`fa-${
                    favorites[beer.id] ? "solid" : "regular"
                  } fa-heart absolute top-6 right-2 text-xl cursor-pointer ${
                    favorites[beer.id] ? "text-red-500" : "text-gray-400"
                  }`}
                  onClick={() => toggleFavorite(beer.id)}
                />
                <img
                  src="../images/logo-beer.png"
                  alt="Logo"
                  className="absolute top-2 left-2 w-14 h-14 object-contain z-10"
                />
                <img
                  src={beer.image_url}
                  alt={beer.name}
                  className="w-full h-48 object-contain mb-4"
                />
                <h1 className="text-lg font-bold truncate text-center mb-4">
                  {beer.name}
                </h1>
                <div className="flex justify-center items-center gap-6 mt-2">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-wine-glass text-[#CBB27C]"></i>
                    <p className="text-sm font-semibold">
                      {formatAlcoholContent(beer.alcohol_content)}%
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-bottle-water text-[#CBB27C]"></i>
                    <p className="text-sm font-semibold">{beer.quantity}cl</p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-1 mt-2">
                  {renderStars(beer.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrevSlide}
            className="w-12 h-12 bg-black cursor-pointer text-white flex items-center justify-center rounded-none"
          >
            <i className="fa-solid fa-chevron-left text-[#CBB27C] text-2xl"></i>
          </button>
          <button
            onClick={handleNextSlide}
            className="w-12 h-12 bg-black cursor-pointer text-white flex items-center justify-center rounded-none"
          >
            <i className="fa-solid fa-chevron-right text-[#CBB27C] text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
