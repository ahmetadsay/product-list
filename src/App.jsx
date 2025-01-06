import ProductCard from "./components/productCard";
import products from "../data.json";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.product.name === product.name);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.product.name === product.name
          ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.product.price }
          : item
      ));
    } else {
      setCart([...cart, { product, quantity: 1, total: product.price }]);
    }
  };

  return (
    <div>
      <h1 className=" font-bold text-2xl my-4">Desserts</h1>
      <div className=" flex flex-col sm:flex-row ">
        <div className="flex flex-wrap">
          {products.map((product, index) => (
            <ProductCard onAddToCart={handleAddToCart} key={index} product={product} />
          ))}
        </div>
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;
