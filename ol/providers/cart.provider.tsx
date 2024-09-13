"use client";

import { createContext, ReactNode, useState } from "react";

type CartItem = {
  productId: string;
  quantity: number;
};

type CartContextProps = {
  items: CartItem[];
  addToCart: (productId: string) => void;
};

export const cartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(productId: string) {
    setCartItems((p) => [...p, { productId: "", quantity: 1 }]);
    // setCartItems(pre => {
    //   const productInCart = pre.some(i => i.productId === productId)
    //   if()
    // })
  }

  return (
    <cartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};
