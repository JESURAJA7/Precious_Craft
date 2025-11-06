export default function TryAtHome() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-12">
              <h2 className="text-5xl font-serif text-gray-800 mb-6">
                Try at <span className="text-blue-900">Home</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience our jewellery in the comfort of your home. Select up to 5 designs and try them on before making a decision.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</span>
                  100% Secure and Insured
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</span>
                  Free Home Trial
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</span>
                  Expert Guidance
                </li>
              </ul>
              <button className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold">
                BOOK YOUR TRIAL
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-12 h-full flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-80 bg-white rounded-lg shadow-xl"></div>
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-900 rounded-full flex items-center justify-center text-white">
                  <span className="text-center text-sm font-semibold">Try<br />Before<br />Buy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
