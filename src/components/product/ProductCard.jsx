import { useNavigate } from "react-router";
import ProductCardBody from "./ProductCardBody";
import ProductCardHeader from "./ProductCardHeader";

export default function ProductCard({ id, title, price, description, image }) {
  const navigate = useNavigate();

  const navigateToProductDetail = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="product-card-container" onClick={navigateToProductDetail}>
      <ProductCardHeader image={image} />
      <ProductCardBody title={title} price={price} />
    </div>
  );
}
