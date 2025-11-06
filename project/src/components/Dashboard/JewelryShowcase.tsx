interface JewelryItem {
  id: string;
  image: string;
  productImage: string;
  title: string;
}

interface JewelryShowcaseProps {
  title?: string;
  items: JewelryItem[];
}

export default function JewelryShowcase({ title = 'Design Led Jewellery', items }: JewelryShowcaseProps) {
  return (
    <div className="w-full py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="group">
            <div className="relative overflow-hidden rounded-3xl shadow-lg aspect-square">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative -mt-20 mx-auto w-32 h-32 bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-100 group-hover:shadow-2xl transition-all duration-300">
              <img
                src={item.productImage}
                alt={`${item.title} product`}
                className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="text-center mt-6">
              <h3 className="text-lg font-medium text-gray-700">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
