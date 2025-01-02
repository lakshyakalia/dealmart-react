import { Link } from "react-router";
import "./product.css";

export default function ({ title, category }) {
  return (
    <div className="product-detail-nav-links">
      <div>
        <Link to={"/"}>HOME</Link> &gt; {category} &gt; {title}
      </div>
    </div>
  );
}
