import Card from "../components/Card";
import { initialProducts } from "../lib/data";

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-12">
        
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {initialProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
