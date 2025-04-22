// src/data/data.js

const initialProducts = [
  {
    id: 1,
    name: "Modern Laptop",
    description: "High-performance laptop for professionals",
    price: 999.99,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "Premium noise-canceling headphones",
    price: 199.99,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Comfortable athletic shoes for runners",
    price: 89.99,
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    name: "Coffee Maker",
    description: "Automatic drip coffee maker",
    price: 49.99,
    category: "Home",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    id: 5,
    name: "Backpack",
    description: "Durable everyday backpack",
    price: 59.99,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
];

const categories = ["Electronics", "Sports", "Home", "Accessories"];

const categoryCards = [
  {
    title: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
  },
  {
    title: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050",
  },
  {
    title: "Home & Living",
    imageUrl: "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
  },
];

export { initialProducts, categories, categoryCards };
