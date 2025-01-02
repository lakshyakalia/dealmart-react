import "./product.css";
import ProductCard from "./ProductCard";

export default function ProductSection({ productList }) {
  return (
    <div className="product-section-container">
      <div className="product-flex">
        {productList.slice(0, productList.length).map((product) => (
          <ProductCard
            key={product.productId}
            id={product.productId}
            title={product.productName}
            price={product.price}
            description={product.productDescription}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
