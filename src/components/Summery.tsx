import React from "react";
import ProductData from "../data/data.json";
import { UseShoppingCart } from "../context/CartContext";

import { FinalProducts } from "./FinalProducts";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function Summery() {
  const { items, cartQuantity } = UseShoppingCart();

  return (
    <div>
      <div>
        <h1>Summary</h1>
        {items.map((item) => (
          <FinalProducts key={item.id} id={item.id} quantity={item.quantity} />
        ))}
      </div>
    </div>
  );
}
