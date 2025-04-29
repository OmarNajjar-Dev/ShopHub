/* eslint-disable react/prop-types */

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../contexts/CategoryContext";
import { createCategoryChangeHandler } from "../../utils/filterHandlers";

export default function CategoryCard({ title, imageUrl, category }) {
  const navigate = useNavigate();
  const { setFilterCriteria } = useContext(CategoryContext);
  const handleCategoryChange = createCategoryChangeHandler(setFilterCriteria);

  return (
    <div
      onClick={() => {
        navigate("/categories");
        handleCategoryChange(category);
      }}
      className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
    >
      <img
        rel="preload"
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
