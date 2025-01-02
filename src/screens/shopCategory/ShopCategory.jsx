import Banner from "../../components/banner/Banner";
import CategoryFilter from "../../components/category/CategoryFilter";
import "./shopcategory.css";
import { banner1 } from "../shop/Shop";
import ProductSection from "../../components/product/ProductSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadMore from "../../utils/LoadMore";

export default function ShopCategory() {
  const { category } = useParams();

  const [productList, setProductList] = useState([]);
  const [isLoading, setLoadingList] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(16);

  var filter = {
    start: offset + 1,
    end: offset + limit,
    total: 36,
  };

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(
        `http://localhost:8080/products?category=${category}&offset=${offset}&limit=${limit}`
      );
      const data = await res.json();
      setProductList(data);
      setLoadingList(false);
      console.log(productList);
    }
    fetchProducts();
  }, [category, offset]);
  return (
    <div className="shop-category">
      <Banner banner={banner1} />
      <CategoryFilter filter={filter} />
      {!isLoading ? <ProductSection productList={productList} /> : ""}
      <LoadMore offset={offset} setOffset={setOffset} limit={limit} />
    </div>
  );
}
