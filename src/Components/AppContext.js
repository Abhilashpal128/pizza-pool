"use client";

import { SessionProvider } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext({});

export function cartProductPrice(cartProduct) {
  let price = parseInt(cartProduct?.basePrice);
  if (cartProduct?.size) {
    price += parseInt(cartProduct?.size.price);
  }
  if (cartProduct?.extras?.length > 0) {
    for (const extra of cartProduct?.extras) {
      price += parseInt(extra.price);
    }
  }
  return price;
}

export function AppProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const ls = typeof window !== "undefined" ? window.localStorage : null;

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  function saveProductsToLocalstorage(cartProducts) {
    if (ls) {
      ls.setItem("cart", JSON.stringify(cartProducts));
    }
  }

  function clearCart() {
    setCartProducts([]);
    saveProductsToLocalstorage([]);
  }

  function removeCartProduct(indexToRemove) {
    console.log("function called");
    setCartProducts((prevProducts) => {
      const newCartProducts = prevProducts.filter(
        (value, index) => index !== indexToRemove
      );
      setCartProducts(newCartProducts);
      return newCartProducts;
    });
    toast.success("Product removed");
  }

  function addToCart(product, size = null, extras = []) {
    setCartProducts((prevProducts) => {
      const cartProducts = { ...product, size, extras };
      const newProduct = [...prevProducts, cartProducts];
      saveProductsToLocalstorage(newProduct);
      return newProduct;
    });
  }

  return (
    <SessionProvider>
      <CartContext.Provider
        value={{
          cartProducts,
          setCartProducts,
          addToCart,
          removeCartProduct,
          clearCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </SessionProvider>
  );
}
