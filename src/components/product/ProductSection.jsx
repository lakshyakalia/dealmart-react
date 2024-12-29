import "./product.css";
import ProductCard from "./ProductCard";

export default function ProductSection({ productList }) {
  return (
    <div className="product-section-container">
      <div className="product-flex">
        {productList.product.slice(0, productList.count).map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
