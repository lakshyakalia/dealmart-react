import { useNavigate } from "react-router";

export default function CartBtn() {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };
  return (
    <div className="cart-img" onClick={navigateToCart}>
      <div>
        <img src="/assets/images/shopping-cart.png" />
      </div>
    </div>
  );
}
