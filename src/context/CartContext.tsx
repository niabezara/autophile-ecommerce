import { createContext, useContext, useState } from "react";
import { ProductInterface } from "../types/types";

type CartItem = {
  id: number;
  quantity: number;
};

interface ProductContextProps {
  //   items: ProductInterface[];
  getItemQuantitiy: (id: number) => void;
  addToCart: (product: ProductInterface) => void;
  incraseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);

export function UseShoppingCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const addToCart = (product: ProductInterface) => {
    const productExist = items.find((item) => item.id === product.id);

    if (productExist) {
      setItems((prevState) =>
        prevState.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      const productWithQuantity = { ...product, quantity: 1 };
      setItems((prevState) => [...prevState, productWithQuantity]);
    }
  };

  function getItemQuantitiy(id: number) {
    return items.find((item) => item.id === id)?.quantity || 0;
  }
  function incraseCartQuantity(id: number) {
    setItems((currentItems) => {
      const itemExists = currentItems.find((item) => item.id === id);

      if (itemExists) {
        return currentItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currentItems, { id, quantity: 1 }];
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setItems((currentItems) => {
      const itemToDecrement = currentItems.find((item) => item.id === id);

      if (itemToDecrement && itemToDecrement.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  }
  function removeFromCart(id: number) {
    setItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        getItemQuantitiy,
        incraseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
