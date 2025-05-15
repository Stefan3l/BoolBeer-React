import axios from "axios";
import { useEffect, useState, forwardRef } from "react";
import { useParams } from "react-router-dom";

export default forwardRef(function CardDetaills(props, ref) {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/beers/${id}`)
      .then((response) => {
        if (response.data) {
          console.log(response.data.data);
          setBeer(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching beer details", error);
      });
  }, [id]);

  if (!beer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      id="beerCard"
      className="container mx-auto px-4 py-12 min-h-screen bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <div className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden max-w-5xl mx-auto border border-amber-100">
        <div className="md:flex relative">
          {/* Decorative element */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-100 rounded-full blur-3xl opacity-30"></div>

          <div className="md:w-1/2 p-10 relative">
            <div className="relative group">
              <img
                src={beer.image_url}
                alt={beer.name}
                className="w-full h-[600px] object-cover rounded-xl shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>

          <div className="md:w-1/2 p-10 relative">
            <h1 className="text-4xl font-bold text-amber-900 mb-6 border-b border-amber-200 pb-4">
              {beer.name}
            </h1>

            <div className="space-y-6">
              <div className="bg-white/50 p-6 rounded-xl backdrop-blur-sm border border-amber-100">
                <p className="text-gray-700 leading-relaxed italic">
                  {beer.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/50 p-6 rounded-xl backdrop-blur-sm border border-amber-100 transition-all hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-amber-800 font-semibold uppercase tracking-wider">
                      Alcohol Content
                    </p>
                    <i className="fa-solid fa-wine-glass text-[#CBB27C] text-lg"></i>
                  </div>
                  <p className="font-bold text-2xl text-amber-900 mt-2">
                    {(beer.alcohol_content / 10).toFixed(1)}%
                  </p>
                </div>
                <div className="bg-white/50 p-6 rounded-xl backdrop-blur-sm border border-amber-100 transition-all hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-amber-800 font-semibold uppercase tracking-wider">
                      Quantity
                    </p>
                    <i className="fa-solid fa-bottle-water text-[#CBB27C] text-lg"></i>
                  </div>
                  <p className="font-bold text-2xl text-amber-900 mt-2">
                    {beer.quantity}cl
                  </p>
                </div>
                <div className="bg-white/50 p-6 rounded-xl backdrop-blur-sm border border-amber-100 transition-all hover:shadow-lg">
                  <p className="text-sm text-amber-800 font-semibold uppercase tracking-wider">
                    Category
                  </p>
                  <p className="font-bold text-lg sm:text-2xl text-amber-900">
                    {beer.category.type_name}
                  </p>
                </div>
                <div className="bg-white/50 p-6 rounded-xl backdrop-blur-sm border border-amber-100 transition-all hover:shadow-lg">
                  <p className="text-sm text-amber-800 font-semibold uppercase tracking-wider">
                    Type
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <div
                      className="w-8 h-8 rounded-full shadow-inner"
                      style={{ backgroundColor: beer.category.type_color }}
                    ></div>
                    <span className="font-bold text-lg text-amber-900">
                      {beer.category.type_color}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 p-6 rounded-xl backdrop-blur-sm border border-amber-100">
                <p className="text-sm text-amber-800 font-semibold uppercase tracking-wider mb-2">
                  Rating
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-8 h-8 ${
                        index < beer.rating ? "text-amber-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
