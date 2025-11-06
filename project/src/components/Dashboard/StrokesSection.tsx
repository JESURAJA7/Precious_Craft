export default function StrokesSection() {
  return (
    <div className="bg-gradient-to-r from-pink-100 via-white to-pink-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif text-gray-800 mb-4">
            #<span className="italic text-pink-600">StrokesofGenius</span>
          </h2>
          <p className="text-gray-600">Artistic creations that tell your story</p>
        </div>

        <div className="relative h-96 bg-gradient-to-br from-pink-200 to-blue-200 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-4 p-8">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-lg hover:bg-white/50 transition-colors"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
