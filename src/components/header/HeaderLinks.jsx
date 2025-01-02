import { Link } from "react-router";

export default function HeaderLinks() {
  return (
    <div className="flex nav-links">
      <div>
        <Link to={"/"}>Shop</Link>
      </div>
      <div>
        <Link to={"/category/clothes"}>Clothes</Link>
      </div>
      <div>
        <Link to={"/category/electronics"}>Electronics</Link>
      </div>
      <div>
        <Link to={"/category/shoes"}>Shoes</Link>
      </div>
      <div>
        <Link to={"/category/furniture"}>Furniture</Link>
      </div>
      {/* <div>
        <Link to={"/category/miscellaneous"}>Miscellaneous</Link>
      </div> */}
    </div>
  );
}
