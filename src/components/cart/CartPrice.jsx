import "./cartcomps.css";

export default function CartPrice() {
  return (
    <>
      <div className="cart-price-container border-light">
        <div className="price-header">PRICE SUMMARY</div>
        <div className="flex-price price-metric">
          <div>Total MRP (Incl. of taxes)</div>
          <div>$200</div>
        </div>
        <div className="flex-price price-metric">
          <div>Bag Discount</div>
          <div className="primary">-$100</div>
        </div>
        <div className="flex-price price-metric">
          <div>Delivery Fee</div>
          <div className="primary">Free</div>
        </div>
        <hr />
        <div className="flex-price price-metric font-bold-large">
          <div>Subtotal</div>
          <div>$100</div>
        </div>
      </div>
      <div className="border-light btn-container">
        <button className="proceed-btn">PROCEED</button>
      </div>
    </>
  );
}
