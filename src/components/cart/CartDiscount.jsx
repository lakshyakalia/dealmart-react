import "./cartcomps.css";

export default function CartDiscount() {
  return (
    <div className="discount-banner">
      <div className="flex-discount">
        <div className="discount-img">
          <img src="https://images.bewakoof.com/web/icon-cart-savings.gif" />
        </div>
        <div>You are saving $20 on this order</div>
      </div>
    </div>
  );
}
