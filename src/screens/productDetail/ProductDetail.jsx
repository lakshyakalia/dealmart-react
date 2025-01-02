import ProductDescription from "../../components/product/ProductDescription";
import ProductDetailNav from "../../components/product/ProductDetailNav";
import ReviewSection from "../../components/review/ReviewSection";
import "./productdetail.css";
import ProductSection from "../../components/product/ProductSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductSectionHeader from "../../components/product/ProductSectionHeader";

const rating = {
  rate: 3.9,
  count: 120,
};

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(4);

  const [productList, setProductList] = useState([]);
  const [isLoadingList, setLoadingList] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    async function getProductDetails() {
      const res = await fetch(`http://localhost:8080/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
      getRelatedProducts(data.productCategory);
      console.log(data);
    }
    getProductDetails();

    async function getRelatedProducts(productCategory) {
      const res = await fetch(
        `http://localhost:8080/products?category=${productCategory}&offset=${offset}&limit=${limit}`
      );
      const data = await res.json();
      setProductList(data);
      setLoadingList(false);
      console.log(productList);
    }
  }, [id]);
  return (
    <div className="product-detail-container">
      {!isLoading ? (
        <div>
          <ProductDetailNav
            title={product.productName}
            category={product.productCategory}
          />
          <ProductDescription product={product} />
          <ReviewSection rating={rating} />
        </div>
      ) : (
        ""
      )}
      {!isLoadingList ? (
        <div>
          <ProductSectionHeader header="Related Products" />
          <ProductSection productList={productList} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
