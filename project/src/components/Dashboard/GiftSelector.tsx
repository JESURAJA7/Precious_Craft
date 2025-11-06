interface GiftOption {
  id: string;
  price: string;
  label: string;
}

interface GiftSelectorProps {
  options: GiftOption[];
  onSelect?: (option: GiftOption) => void;
}

export default function GiftSelector({ options, onSelect }: GiftSelectorProps) {
  return (
    <div className="w-full py-12">
      <div className="max-w-2xl mx-auto">
        <div className="relative bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl p-8 md:p-12 border-4 border-dashed border-pink-200 shadow-xl">
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-pink-300 rounded-full shadow-lg" />
          <div className="absolute -top-4 right-1/3 w-10 h-10 bg-pink-300 rounded-full shadow-lg" />
          <div className="absolute top-10 -right-4 w-16 h-16 bg-pink-300 rounded-full shadow-lg" />
          <div className="absolute -bottom-8 left-1/4 w-12 h-12 bg-pink-300 rounded-full shadow-lg" />
          <div className="absolute -bottom-6 right-1/3 w-10 h-10 bg-pink-300 rounded-full shadow-lg" />
          <div className="absolute -bottom-4 -right-6 w-14 h-14 bg-pink-300 rounded-full shadow-lg" />

          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Choose Perfect <span className="font-black">Gift</span> for your
              <br />
              loved ones
            </h2>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-4">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => onSelect?.(option)}
                className="bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
              >
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </div>
                <p className="text-sm text-purple-600 font-medium">Under</p>
                <p className="text-2xl font-bold text-purple-700">{option.price}</p>
                <p className="text-xs text-purple-500 mt-1">{option.label}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
