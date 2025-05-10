import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Card() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/beers")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setBeers(response.data);
        } else if (response.data && Array.isArray(response.data.data)) {
          setBeers(response.data.data);
        } else {
          setError("Invalid data format");
        }
      })
      .catch((error) => {
        console.error("Products not found", error);
      });
  }, []);

  // funzione per formattare il contenuto alcolico
  const formatAlcoholContent = (value) => {
    return (value / 10).toFixed(1);
  };

  return (
    <div
      className="cards-container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "25px",
        padding: "30px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {beers.map((beer) => (
        <div
          key={beer.id}
          className="card hover:shadow-lg transition-shadow duration-300"
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            backgroundColor: "white",
          }}
        >
          <div className="relative" style={{ height: "200px" }}>
            <img
              src={beer.image_url}
              alt={beer.name}
              className="card-image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                padding: "10px",
              }}
            />
            <div
              className="absolute top-0 right-0"
              style={{
                width: "80px",
                height: "80px",
                padding: "5px",
              }}
            >
              <img
                src="../images/logo-beer.png"
                alt="Promo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div
            className="card-content p-6"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2 className="text-xl font-bold mb-3 text-gray-800">
              {beer.name}
            </h2>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-wine-glass text-[#CBB27C] text-lg"></i>
                <p className="text-sm font-semibold text-gray-700">
                  {formatAlcoholContent(beer.alcohol_content)}%
                </p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-bottle-water text-[#CBB27C] text-lg"></i>
                <p className="text-sm font-semibold text-gray-700">
                  {beer.quantity}cl
                </p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex text-[#CBB27C]">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`fa-solid fa-star ${
                      index < beer.rating ? "text-[#CBB27C]" : "text-gray-300"
                    }`}
                  ></i>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                ({beer.rating}/5)
              </span>
            </div>

            <Link
              to={`/product/${beer.id}`}
              className="mt-auto bg-[#CBB27C] hover:bg-[#b89d64] text-white py-2 px-4 rounded-lg transition-colors duration-300 text-center font-semibold"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
