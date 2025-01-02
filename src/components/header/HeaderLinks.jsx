import { Link } from "react-router";

export default function HeaderLinks() {
  return (
    <div className="flex nav-links">
      <div>
        <Link to={"/"}>Shop</Link>
      </div>
      <div>
        <Link to={"/category/men"}>Men</Link>
      </div>
      <div>
        <Link to={"/category/women"}>Women</Link>
      </div>
      <div>
        <Link to={"/category/kids"}>Kids</Link>
      </div>
    </div>
  );
}
