import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SectionCarousel() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/beers")
      .then((response) => {
        //controllo se la risposta e un array
        if (Array.isArray(response.data)) {
          console.log(response.data);
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

  return (
    <div className="flex ">
      <div>
        <img src="../images/Prod-Promo_Nenea-Iancu-Blonda-Sp.pn" alt="Promo" />
      </div>
      <div>
        {beers.map((beer) => (
          <div key={beer.id}>
            <img src={beer.image_url} alt={beer.name} />
            <h1>{beer.name}</h1>
            <p>{beer.alcohol_content}</p>
            <p>{beer.quantity}cl</p>
          </div>
        ))}
      </div>
    </div>
  );
}
