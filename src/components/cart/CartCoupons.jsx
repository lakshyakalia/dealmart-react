import "./cartcomps.css";

export default function CartCoupons() {
  return (
    <div className="coupon-container border-light">
      <div className="coupon-header">Coupons & Offers</div>
      <div className="flex-coupon space-btw">
        <div className="flex-coupon">
          <div className="discount-icon">
            <img src="./assets/images/discount.png" />
          </div>
          <div>
            <div className="bold">Apply Coupon/ Gift Card</div>
            <div className="light">Crazy deals and other amazing offers</div>
          </div>
        </div>
        <div>VIEW</div>
      </div>
    </div>
  );
}
