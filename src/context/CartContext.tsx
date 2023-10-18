import { createContext, useContext, useState } from "react";
import { ProductInterface } from "../types/types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { toast } from "react-toastify";

type CartItem = {
  id: number;
  quantity: number;
};

interface ProductContextProps {
  items: CartItem[];
  getItemQuantity: (id: number) => number;
  addToCart: (product: ProductInterface) => void;
  incraseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  removeAllFromCart: () => void;
  cartQuantity: number;
  openCart: () => void;
  setOpenModal: any;
  openModal: boolean;
  closeCart: () => void;
  isNavbarOpen: boolean;
  notify: () => void;
  handleLinkClick: () => void;
  toggleNavbar: () => void;
}

const CartContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);

export function UseShoppingCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
  const [openModal, setOpenModal] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const notify = () => {
    toast.success("Item added successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    document.body.style.overflow = isNavbarOpen ? "auto" : "hidden";
  };

  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  };

  const openCart = () => {
    setOpenModal((prevOpenModal) => !prevOpenModal);
  };
  const closeCart = () => {
    setOpenModal(false);
  };
  const cartQuantity = items.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  const addToCart = (product: ProductInterface, quantity: number = 1) => {
    setItems((prevState) => {
      const itemExists = prevState.find((item) => item.id === product.id);

      if (itemExists) {
        return prevState.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity } : item
        );
      } else {
        return [...prevState, { ...product, quantity: quantity }];
      }
    });
  };

  function getItemQuantity(id: number): number {
    const item = items.find((item) => item.id === id);
    return item ? item.quantity : 0;
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
  function removeAllFromCart() {
    setItems([]);
  }
  return (
    <CartContext.Provider
      value={{
        items,
        closeCart,
        openModal,
        isNavbarOpen,
        notify,
        toggleNavbar,
        handleLinkClick,
        setOpenModal,
        openCart,
        addToCart,
        getItemQuantity,
        incraseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        removeAllFromCart,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
