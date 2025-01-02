import "./product.css";

export default function ProductDescriptionContent(props) {
  return (
    <div className="product-description">
      <div>{props.product.title}</div>
      <div className="flex-row">
        <div>{props.product.rating.rate} </div>
        <div>
          <img src="/assets/images/star.png" alt="" />
        </div>
        <div>{" (" + props.product.rating.count + ")"}</div>
      </div>
      <div>{"$" + props.product.price}</div>
      <div>{props.product.description}</div>
      <div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
      <div className="category">
        <b>Category:</b> {props.product.category}
      </div>
    </div>
  );
}
