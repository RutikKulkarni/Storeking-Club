import React from "react";

export default function Easy() {
  const name = "Apple";
  const price = 80;

  return (
    <div>
      <h1>Easy Task</h1>
      <div
        style={{
          border: "1px solid black",
          padding: 16,
          width: 200,
          margin: "auto",
        }}
      >
        <h3>{name}</h3>
        <p>Price: ₹{price}</p>
        <button>Buy Now</button>
      </div>
    </div>
  );
}
