import { useContext } from "react";
import "./cartcomps.css";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ cartItem }) {
  const { cartItemCount, setCartItemCount } = useContext(CartContext);
  const removeCartItem = async () => {
    const res = await fetch(`http://localhost:8080/carts/${cartItem.id}`, {
      method: "DELETE",
    });
    // const data = await res.json();
    // console.log(data);
    // setCart(data);
    setCartItemCount(cartItemCount - 1);
    // setIsLoading(false);
  };
  return (
    <div className="cart-item-container border-light">
      <div className="flex-cart-item">
        <div className="cart-item-img">
          <img src={cartItem.image} alt="" />
        </div>
        <div className="cart-item-content">
          <div className="item-title">{cartItem.title}</div>
          <div className="font-light size-14">
            <b>Category: </b>
            {cartItem.category}
          </div>
          <div className="font-light size-14">
            Ships in <b>2-3 days</b>
          </div>
          <div>
            <button className="remove-btn" onClick={removeCartItem}>
              Remove
            </button>
          </div>
          <div className="item-price">{"$" + cartItem.price}</div>
        </div>
      </div>
    </div>
  );
}
