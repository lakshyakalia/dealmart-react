import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItemCount, setCartItemCount] = useState(0);
  const { userId } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCartItems() {
      const res = await fetch(`http://localhost:8080/carts/${userId}`);
      const data = await res.json();
      console.log(data);
      setCart(data);
      setCartItemCount(data.length);
      setIsLoading(false);
    }
    getCartItems();
  }, [cartItemCount]);
  return (
    <CartContext.Provider
      value={{ cartItemCount, setCartItemCount, cart, isLoading }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
