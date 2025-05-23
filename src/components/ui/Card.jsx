/* eslint-disable react/prop-types */

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { cardAnimation, heartAnimation } from "../../animations/cardAnimation";
import CartContext from "../../contexts/CartContext";
import { useContext } from "react";

export default function Card({
  product,
  isFavorite,
  toggleFavorite,
  imageHoverScale,
}) {
  const { addToCart } = useContext(CartContext);
  const { id, name, description, price, imageUrl } = product;

  return (
    <motion.div
      id={id}
      {...cardAnimation}
      className="h-full rounded-lg bg-white shadow-md overflow-hidden group flex flex-col"
    >
      <div className="relative h-48">
        <img
          rel="preload"
          src={imageUrl}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-${imageHoverScale}`}
        />
        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow hover:bg-gray-200 cursor-pointer"
          onClick={() => toggleFavorite(product)}
        >
          {/* استخدام motion مع قلب التغيير */}
          <motion.div
            animate={isFavorite ? heartAnimation.animate : heartAnimation.exit}
            initial={heartAnimation.initial}
            exit={heartAnimation.exit}
            transition={heartAnimation.transition}
          >
            <Heart
              className={`h-5 w-5 ${
                isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
              }`}
            />
          </motion.div>
        </button>
      </div>

      <div className="p-4 flex flex-col flex-grow gap-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold">${price}</span>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
