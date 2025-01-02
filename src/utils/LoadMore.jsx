import "./utils.css";

export default function LoadMore({ offset, setOffset, limit }) {
  function loadMoreItems() {
    console.log(offset, +" " + limit);
    setOffset((prevOffset) => prevOffset + limit);
  }
  return (
    <div className="load-more">
      <button className="btn" onClick={loadMoreItems}>
        Load More
      </button>
    </div>
  );
}
