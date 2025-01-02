import Banner from "../../components/banner/Banner";
import ProductSection from "../../components/product/ProductSection";
import "./shop.css";
import ProductSectionHeader from "../../components/product/ProductSectionHeader";
import { use, useEffect, useState } from "react";

var banner2 = {
  title: "Exclusive Offers For You",
  subtitle: "Only on best sellers products",
  img: "https://static.vecteezy.com/system/resources/previews/046/934/608/non_2x/shopping-girl-standing-on-transparent-background-free-png.png",
  btnText: "Check Now",
};

export var banner1 = {
  title: "New Arrivals Only",
  subtitle: "new collections for everyone",
  img: "https://static.vecteezy.com/system/resources/previews/044/846/982/non_2x/beautiful-emotional-woman-enjoying-shopping-on-isolated-transparent-background-free-png.png",
  btnText: "Latest Collection",
};

export default function Shop() {
  const [productList2, setProductList2] = useState([]);
  const [isloadingList2, setLoadingList2] = useState(true);
  const [productList1, setProductList1] = useState([]);
  const [isloadingList1, setLoadingList1] = useState(true);

  const [offset1, setOffset1] = useState(0);
  const [limit1, setLimit1] = useState(4);

  const [offset2, setOffset2] = useState(0);
  const [limit2, setLimit2] = useState(16);

  useEffect(() => {
    async function fetchProducts1() {
      const res = await fetch(
        `http://localhost:8080/products?offset=${offset1}&limit=${limit1}`
      );
      const data = await res.json();
      setProductList2(data);
      setLoadingList2(false);
      console.log(productList2);
    }
    fetchProducts2();

    async function fetchProducts2() {
      const res = await fetch(
        `http://localhost:8080/products?offset=${offset2}&limit=${limit2}`
      );
      const data = await res.json();
      setProductList1(data);
      setLoadingList1(false);
      console.log(productList1);
    }
    fetchProducts1();
  }, []);

  return (
    <div>
      <div className="shop-banner">
        <Banner banner={banner1} />
      </div>
      <div className="padding-left-right">
        <div>
          <ProductSectionHeader header="Popular In Women" />
          {!isloadingList2 ? <ProductSection productList={productList2} /> : ""}
        </div>
        <div>
          <Banner banner={banner2} />
        </div>
        <div>
          <ProductSectionHeader header="New Collections" />
          {!isloadingList1 ? <ProductSection productList={productList1} /> : ""}
        </div>
      </div>
    </div>
  );
}
