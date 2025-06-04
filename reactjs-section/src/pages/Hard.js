import React, { useState, useEffect } from "react";

export default function Hard() {
  const products = [
    { id: 1, name: "Apple", price: 80, description: "This is red apple" },
    { id: 2, name: "Banana", price: 40, description: "This is yellow banana" },
    { id: 3, name: "Cherry", price: 70, description: "this is red cherries" },
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  useEffect(() => {
    console.log("Cart changed:", cart);
  }, [cart]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h1>Hard Task</h1>
      <h2>Products</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((p) => (
          <li key={p.id} style={{ margin: "10px 0" }}>
            {p.name} - ₹{p.price}
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h3>Cart</h3>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cart.map((item, idx) => (
            <li key={idx}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
      <p>
        <b>Total:</b> ₹{total.toFixed(2)}
      </p>
    </div>
  );
}
