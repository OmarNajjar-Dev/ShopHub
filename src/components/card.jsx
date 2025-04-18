import { Heart } from "lucide-react";

// CartPage: a single product card with hover‑scale image and a favorite button
export default function CartPage({
  img,
  title,
  description,
  price,
  scale = 100,               // default hover scale (e.g. 100 → scale-100)
}) {
  return (
    // Outer card container (enables group-hover on children)
    <div className="h-full rounded-lg bg-white shadow-md overflow-hidden group">
      
      {/* Image area: relative for absolute-positioned heart button */}
      <div className="relative h-48 overflow-hidden">
        {/* Product image: scales on hover of the parent group */}
        <img
          src={img}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-${scale}`}
        />
        {/* Favorite (heart) button in the top‑right */}
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white shadow hover:bg-gray-200">
          <Heart className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Content area: padding + flex layout */}
      <div className="p-4 flex flex-col gap-2">
        {/* Product title */}
        <h3 className="text-lg font-semibold">{title}</h3>
        {/* Short description */}
        <p className="text-gray-600 text-sm">{description}</p>
        {/* Price + Add to Cart button */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">${price}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Add to Cart
          </button>
        </div>
      </div>
      
    </div>
  );
}
