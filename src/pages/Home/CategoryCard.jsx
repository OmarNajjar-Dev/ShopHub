/* eslint-disable react/prop-types */

export default function CategoryCard({ title, imageUrl }) {
  return (
    <div className="relative h-64 rounded-lg overflow-hidden cursor-pointer group">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold font-sans">{title}</h3>
      </div>
    </div>
  );
}
