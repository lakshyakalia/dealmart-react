import "./cartcomps.css";

export default function CartItem({ cartItem }) {
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
            <button className="remove-btn">Remove</button>
          </div>
          <div className="item-price">{"$" + cartItem.price}</div>
        </div>
      </div>
    </div>
  );
}
