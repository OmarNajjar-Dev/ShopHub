import { Heart } from "lucide-react";

export default function Card({
  product,
  isFavorite,
  toggleFavorite, // function to toggle favorite status
  scale = 100, // default hover scale (e.g. 100 → scale-100)
}) {
  const { id, name, description, price, image_url } = product;
  
  return (
    // Outer card container (enables hover effects on child elements)
    <div
      id={id}
      className="h-full rounded-lg bg-white shadow-md overflow-hidden group flex flex-col"
    >
      {/* Image container: positioning for the heart button */}
      <div className="relative h-48">
        {/* Product image: scales when hovered */}
        <img
          src={image_url}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-${scale}`}
        />
        {/* Heart button (favorite) in the top-right corner */}
        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow hover:bg-gray-200 cursor-pointer"
          onClick={() => toggleFavorite(product)}
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>

      {/* Content section: padding and flex layout for text */}
      <div className="p-4 flex flex-col flex-grow gap-2">
        {/* Product name/title */}
        <h3 className="text-lg font-semibold">{name}</h3>
        {/* Short product description */}
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        {/* Price and Add to Cart button */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold">${price}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
