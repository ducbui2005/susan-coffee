"use client"

import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export default function AddToCart({ product, children }) {
  const { cart, setCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0);

  // Lấy quantity từ localStorage khi mount
  useEffect(() => {
    const productInCart = Array.isArray(cart)
      ? cart.find((p) => p._id === product._id)
      : null;
    setQuantity(productInCart ? productInCart.quantity : 0);
  }, [product._id, cart]);

  // Cập nhật localStorage mỗi khi quantity thay đổi
  useEffect(() => {
    let newCart = Array.isArray(cart) ? [...cart] : [];
    const index = newCart.findIndex((p) => p._id === product._id);

    if (quantity > 0) {
      if (index >= 0) {
        newCart[index].quantity = quantity;
      } else {
        newCart.push({ ...product, quantity });
      }
    } else {
      if (index >= 0) {
        newCart.splice(index, 1);
      }
    }


    setCart(newCart)
  }, [quantity]);

  if (quantity === 0) {
    return (
      <button className="btn btn-dark" onClick={() => setQuantity(1)}>
        {children}
      </button>
    );
  } else {
    return (
      <div className="input-group">
        <div className="btn btn-dark" onClick={() => setQuantity(quantity - 1)}>-</div>
        <input
          type="number"
          value={quantity}
          min="0"
          className="text-center"
          style={{ width: "60px" }}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
        />
        <div className="btn btn-dark" onClick={() => setQuantity(quantity + 1)}>+</div>
      </div>
    );
  }
}