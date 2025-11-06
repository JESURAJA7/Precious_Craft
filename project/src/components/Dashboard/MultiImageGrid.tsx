export default function MultiImageGrid() {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-3/4 h-3/4 bg-white/50 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-8">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-gradient-to-br from-rose-100 to-amber-100 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-2/3 h-2/3 bg-white/40 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
