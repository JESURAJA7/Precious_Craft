export default function CollectionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-rose-900 to-red-900 py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-6xl md:text-7xl font-serif text-white mb-4">
          collection <span className="italic text-yellow-300">LUMINA</span>
        </h2>
        <p className="text-xl text-white/90 mb-8">Radiance Redefined</p>
        <button className="bg-white text-red-900 px-10 py-4 hover:bg-gray-100 transition-colors font-semibold">
          DISCOVER COLLECTION
        </button>
      </div>
    </div>
  );
}
