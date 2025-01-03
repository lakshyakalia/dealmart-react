import { useContext } from "react";
import "./cartcomps.css";
import { CartContext } from "../../context/CartContext";

export default function CartPrice() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div className="cart-price-container border-light">
        <div className="price-header">PRICE SUMMARY</div>
        <div className="flex-price price-metric">
          <div>Total MRP (Incl. of taxes)</div>
          <div>
            ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </div>
        </div>
        <div className="flex-price price-metric">
          <div>Bag Discount</div>
          <div className="primary">-$0</div>
        </div>
        <div className="flex-price price-metric">
          <div>Delivery Fee</div>
          <div className="primary">Free</div>
        </div>
        <hr />
        <div className="flex-price price-metric font-bold-large">
          <div>Subtotal</div>
          <div>
            ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </div>
        </div>
      </div>
      <div className="border-light btn-container">
        <button className="proceed-btn">PROCEED</button>
      </div>
    </>
  );
}
