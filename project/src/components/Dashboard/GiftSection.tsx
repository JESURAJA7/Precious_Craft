export default function GiftSection() {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-pink-900 py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-5xl font-serif mb-6">
              Gift <span className="italic">vouchers</span>
            </h2>
            <p className="text-lg text-white/90 mb-8">
              The perfect gift for every occasion. Available in multiple denominations.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {['₹5000', '₹10000', '₹25000'].map((amount, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/20 transition-colors cursor-pointer">
                <div className="text-2xl font-bold">{amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
