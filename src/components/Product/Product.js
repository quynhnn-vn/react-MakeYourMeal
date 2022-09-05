import React from "react";
import { products } from "../../data/products";

export default function Product() {
  return products.map((product) => (
    <div key={product.id}>
      <h2>{product.name}</h2>
      {product.description}
    </div>
  ));
}
