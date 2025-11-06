interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
  columns?: number;
}

export default function ProductGrid({ products, columns = 3 }: ProductGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[columns] || 'grid-cols-3';

  return (
    <div className="w-full py-12">
      <div className="grid gap-8" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))` }}>
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-pink-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="aspect-square bg-pink-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 underline decoration-amber-600 decoration-2 underline-offset-4">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
