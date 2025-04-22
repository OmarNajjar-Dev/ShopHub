// src/data/data.js

const initialProducts = [
  {
    id: 1,
    name: 'Modern Laptop',
    description: 'High-performance laptop for professionals',
    price: 999.99,
    category: 'Electronics',
    image_url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853'
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    description: 'Premium noise-canceling headphones',
    price: 199.99,
    category: 'Electronics',
    image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
  },
  {
    id: 3,
    name: 'Running Shoes',
    description: 'Comfortable athletic shoes for runners',
    price: 89.99,
    category: 'Sports',
    image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
  },
  {
    id: 4,
    name: 'Coffee Maker',
    description: 'Automatic drip coffee maker',
    price: 49.99,
    category: 'Home',
    image_url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085'
  },
  {
    id: 5,
    name: 'Backpack',
    description: 'Durable everyday backpack',
    price: 59.99,
    category: 'Accessories',
    image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62'
  }
];

const categories = [
  {
    title: "Electronics",
    imageUrl: "../assets/images/electronics-devices.webp",
  },
  {
    title: "Fashion",
    imageUrl: "../assets/images/fashion-clothing.webp",
  },
  {
    title: "Home & Living", 
    imageUrl: "../assets/images/home-living.webp",
  },
];

export { initialProducts, categories };
