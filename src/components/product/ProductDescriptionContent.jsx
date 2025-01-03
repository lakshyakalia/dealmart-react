import { useContext, useState } from "react";
import "./product.css";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import LoginPopup from "../loginPopup/LoginPopup";

export default function ProductDescriptionContent(props) {
  const { cartItemCount, setCartItemCount } = useContext(CartContext);
  const { isLoggedIn, userId } = useContext(AuthContext);
  const [showPopup, setShowPopup] = useState(false);

  async function addToCart() {
    if (!isLoggedIn) {
      setShowPopup(true);
      return;
    } else {
      try {
        const res = await fetch(`http://localhost:8080/carts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              userId: userId,
            },
            product: {
              productId: props.product.productId,
            },
            quantity: 1,
          }),
        });
        setCartItemCount(cartItemCount + 1);
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <>
      {showPopup && <LoginPopup onClose={() => setShowPopup(false)} />}

      <div className="product-description">
        <div>{props.product.productName}</div>
        <div className="flex-row">
          {/* <div>{props.product.rating.rate} </div> */}
          <div>3.8 </div>
          <div>
            <img src="/assets/images/star.png" alt="" />
          </div>
          {/* <div>{" (" + props.product.rating.count + ")"}</div> */}
          <div>{" (" + "192" + ")"}</div>
        </div>
        <div>{"$" + props.product.price}</div>
        <div>{props.product.productDescription}</div>
        <div>
          <button className="add-to-cart-btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
        <div className="category">
          <b>Category:</b> {props.product.productCategory}
        </div>
      </div>
    </>
  );
}
