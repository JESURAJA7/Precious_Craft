export default function MidBanner() {
  return (
    <div className="bg-gradient-to-r from-rose-100 to-amber-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-amber-200 to-rose-200 rounded-lg p-12 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-4xl font-serif text-gray-800 mb-2">LUMINO</h3>
            <p className="text-gray-700">Diamond Collection</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-100 to-amber-200 rounded-lg p-12 flex items-center justify-center relative overflow-hidden">
          <div className="text-center z-10">
            <h3 className="text-4xl font-serif text-gray-800 mb-2">MANGALSUTRA</h3>
            <p className="text-gray-700">Timeless Designs</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-40 h-40 bg-yellow-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
