export default function ProductShowcase() {
  const products = [
    { 
      name: "Solitaire", 
      image: "https://res.cloudinary.com/dczicfhcv/image/upload/v1762324431/1_b64ccp.webp" 
    },
    { 
      name: "Men's Jewellery", 
      image: "https://res.cloudinary.com/dczicfhcv/image/upload/v1762324431/mens_v1_cfcydv.webp" 
    },
    { 
      name: "Mangalsutras", 
      image: "https://res.cloudinary.com/dczicfhcv/image/upload/v1762324430/mangalsutras_rxaeim.webp" 
    },
    { 
      name: "Nose Pins", 
      image: "https://res.cloudinary.com/dczicfhcv/image/upload/v1762324430/nose-pins_mh4io8.webp" 
    },
    { 
      name: "Kids Jewellery", 
      image: "https://res.cloudinary.com/dczicfhcv/image/upload/v1762324430/d-kids_v1_uonycd.webp" 
    },
    { 
      name: "Gold Coins", 
      image: "https://res.cloudinary.com/dczicfhcv/image/upload/v1762324430/coins_mwm61b.webp" 
    },
    { 
      name: "Anklets", 
      image: "https://res.cloudinary.com/dczicfhcv/image/upload/v1762324430/anklets_gkyhji.webp" 
    },
    { 
      name: "Pendants", 
      image: "https://res.cloudinary.com/demo/image/upload/v1234567/jewellery/pendants.jpg" 
    },
    { 
      name: "Rings", 
      image: "https://res.cloudinary.com/demo/image/upload/v1234567/jewellery/rings.jpg" 
    },
    { 
      name: "Necklaces", 
      image: "https://res.cloudinary.com/demo/image/upload/v1234567/jewellery/necklaces.jpg" 
    },
    { 
      name: "Earrings", 
      image: "https://res.cloudinary.com/demo/image/upload/v1234567/jewellery/earrings.jpg" 
    },
    { 
      name: "Bangles", 
      image: "https://res.cloudinary.com/demo/image/upload/v1234567/jewellery/bangles.jpg" 
    },
    { 
      name: "Bracelets", 
      image: "https://res.cloudinary.com/demo/image/upload/v1234567/jewellery/bracelets.jpg" 
    },
    { 
      name: "Gold Chains", 
      image: "https://res.cloudinary.com/demo/image/upload/v1234567/jewellery/gold-chains.jpg" 
    },
    { 
      name: "Kada", 
      image: "https://res.cloudinary.com/demo/image/upload/v1234567/jewellery/kada.jpg" 
    }
  ];

  return (
    <div className="py-12 px-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">
          Explore Our Collections
        </h2>
        <div className="relative overflow-hidden">
          <div className="animate-slide">
            <div className="flex space-x-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                >
                  <div className="bg-white rounded-xl shadow-lg p-4 border border-purple-100 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden group-hover:bg-gray-200 transition-all">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center text-lg bg-gradient-to-br from-purple-100 to-pink-100 rounded-full">
                        {product.name.charAt(0)}
                      </div>
                    </div>
                    <p className="text-center text-sm font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                      {product.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / ${products.length / 2}));
          }
        }
        .animate-slide {
          animation: slide 30s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}