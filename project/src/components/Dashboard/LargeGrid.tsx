export default function LargeGrid() {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[...Array(16)].map((_, index) => (
            <div
              key={index}
              className={`aspect-square bg-gradient-to-br rounded-lg overflow-hidden group cursor-pointer hover:shadow-2xl transition-all ${
                index % 4 === 0
                  ? 'from-blue-900 to-gray-900'
                  : index % 4 === 1
                  ? 'from-amber-100 to-rose-100'
                  : index % 4 === 2
                  ? 'from-pink-100 to-purple-100'
                  : 'from-gray-100 to-blue-100'
              }`}
            >
              <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className={`w-3/5 h-3/5 rounded-full ${
                  index % 4 === 0 ? 'bg-white/20' : 'bg-white/50'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
