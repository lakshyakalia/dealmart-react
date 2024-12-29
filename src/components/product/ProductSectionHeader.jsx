import "./product.css";

export default function ProductSectionHeader({ header }) {
  return (
    <div>
      <div className="product-section-header">{header}</div>
      <div className="hr"></div>
    </div>
  );
}
