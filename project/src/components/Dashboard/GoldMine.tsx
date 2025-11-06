export default function GoldMine() {
  return (
    <div className="bg-gradient-to-r from-rose-50 to-amber-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-serif text-gray-800">
            Gold Mine <span className="text-amber-600">10+1</span>
          </h2>
          <p className="text-gray-600 mt-2">Save and earn with every purchase</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                <span className="font-semibold text-gray-800">Buy 10 months</span>
                <span className="text-amber-600 font-bold">Get 1 FREE</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Monthly savings</span>
                <span className="font-semibold text-gray-800">₹5,000</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Bonus month value</span>
                <span className="font-semibold text-green-600">₹5,000</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors">
              JOIN NOW
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-gradient-to-br from-amber-100 to-rose-100 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="w-24 h-24 bg-white/50 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
