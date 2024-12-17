/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import './App.css';

import gpuImage from './assets/images/GPU.jpg';
import ramImage from './assets/images/RAM.jpg';
import ssdImage from './assets/images/SSD.jpg';
import cpuImage from './assets/images/CPU.jpg';
import cpu2Image from './assets/images/I9.jpg';

function App() {
  const products = [
    { id: 1, name: "RTX 4090 TI", description: "RTX 4090 TI Founder's edition", price: 1600, image: gpuImage },
    { id: 2, name: "Ryzen 9 9980X3D", description: "Ryzen 9 9950X3D", price: 650, image: cpuImage },
    { id: 3, name: "64GB DDR4", description: "64GB DDR4 RAM", price: 210, image: ramImage },
    { id: 4, name: "1TB NVME SSD", description: "1TB SSD NVME", price: 120, image: ssdImage },
    { id: 5, name: "I9 14900KF", description: "I9 14900KF", price: 422, image: cpu2Image },
    { id: 6, name: "I9 14900KF", description: "I9 14900KF", price: 422, image: cpu2Image },
    { id: 7, name: "I9 14900KF", description: "I9 14900KF", price: 422, image: cpu2Image },
    { id: 8, name: "I9 14900KF", description: "I9 14900KF", price: 422, image: cpu2Image },
  ];

  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleBuy = () => {
    alert(`You bought all the items in the cart for $${totalPrice}. Thank you!`);
    setCart([]);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleDelete = (itemId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleClearAll = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
      <Navbar onCartClick={toggleCartVisibility} />
      <h1>a</h1>
      <ProductList products={products} onBuy={handleBuy} onAddToCart={handleAddToCart} />

      {isCartVisible && (
        <div className="cart-overlay">
          <div className="cart">
            <button className="cart-close" onClick={toggleCartVisibility}>
              X
            </button>
            <h2>Your Cart</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price} (x{item.quantity})
                  <button onClick={() => handleDelete(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: ${totalPrice}</p>
            <div className="cart-buttons">
              <button className="buy-all" onClick={handleBuy}>
                Buy All
              </button>
              <button className="clear" onClick={handleClearAll}>
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
