import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
const EmptyCart = () => {
  const navigate = useNavigate();

  return (
      <div className="sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-gray-400"><ShoppingCart/></div>
          <h2 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h2>
          <p className="mt-1 text-sm text-gray-500">Start adding some items to your cart!</p>
          <div className="mt-6">
            <button
              onClick={() => navigate("/categories")}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>
  );
};

export default EmptyCart;



 

