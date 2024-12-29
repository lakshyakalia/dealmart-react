import Banner from "../../components/banner/Banner";
import CategoryFilter from "../../components/category/CategoryFilter";
import "./shopcategory.css";
import { banner1, productList1 } from "../shop/Shop";
import ProductSection from "../../components/product/ProductSection";
var filter = {
  start: 1,
  end: 12,
  total: 36,
};

export default function ShopCategory() {
  return (
    <div className="shop-category">
      <Banner banner={banner1} />
      <CategoryFilter filter={filter} />
      <ProductSection productList={productList1} />
    </div>
  );
}
