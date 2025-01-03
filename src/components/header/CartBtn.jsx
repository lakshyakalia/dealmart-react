import { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/CartContext";

export default function CartBtn() {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };
  return (
    <div className="cart-img" onClick={navigateToCart}>
      <div>
        <CartItem />
        <img src="/assets/images/shopping-cart.png" />
      </div>
    </div>
  );
}

const CartItem = () => {
  const { cartItemCount } = useContext(CartContext);
  return <div className="cart-item">{cartItemCount}</div>;
};
