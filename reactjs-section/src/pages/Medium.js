import React, { useState } from "react";

export default function Medium() {
  const products = [
    { id: 1, name: "Apple", price: 80, description: "This is red apple" },
    { id: 2, name: "Banana", price: 40, description: "This is yellow banana" },
    { id: 3, name: "Cherry", price: 70, description: "this is red cherries" },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h1>Medium Task</h1>
      <h2>Products List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((p) => (
          <li key={p.id} style={{ margin: "10px 0" }}>
            <button onClick={() => setSelected(p)}>
              {p.name} - ₹{p.price}
            </button>
          </li>
        ))}
      </ul>
      {selected && (
        <div style={{ marginTop: 20, border: "1px solid #ccc", padding: 16 }}>
          <h3>Selected Product</h3>
          <p>
            <b>Name:</b> {selected.name}
          </p>
          <p>
            <b>Price:</b> ₹{selected.price}
          </p>
          <p>
            <b>Description:</b> {selected.description}
          </p>
        </div>
      )}
    </div>
  );
}
