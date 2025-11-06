export default function TripleShowcase() {
  const showcases = [
    { title: 'Elegant Necklaces', bgColor: 'from-gray-800 to-gray-900' },
    { title: 'Designer Earrings', bgColor: 'from-amber-100 to-rose-100' },
    { title: 'Bridal Collection', bgColor: 'from-blue-50 to-pink-50' }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {showcases.map((item, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${item.bgColor} rounded-lg overflow-hidden h-96 group cursor-pointer`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-serif text-white drop-shadow-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
