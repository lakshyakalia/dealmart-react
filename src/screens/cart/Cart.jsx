import CartCoupons from "../../components/cart/CartCoupons";
import CartDiscount from "../../components/cart/CartDiscount";
import CartItem from "../../components/cart/CartItem";
import CartPrice from "../../components/cart/CartPrice";
import "./cart.css";

const cart = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
];

export default function Cart() {
  return (
    <div className="cart-container">
      <div className="cart-title">
        My Cart ({cart.length} Item{cart.length > 1 ? "s" : ""})
      </div>
      <div className="flex width-inherit">
        <div>
          <CartDiscount />
          {cart.map((cart) => (
            <CartItem key={cart.id} cartItem={cart} />
          ))}
        </div>
        <div>
          <CartCoupons />
          <CartPrice />
        </div>
      </div>
    </div>
  );
}
