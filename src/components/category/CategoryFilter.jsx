import "./categoryfilter.css";

export default function CategoryFilter({ filter }) {
  return (
    <div className="flex-filter">
      <div>
        <b>Showing {filter.start + "-" + filter.end}</b> out of{" "}
        {filter.total + " "}
        products
      </div>
      <div>
        <button className="btn">Sort by</button>
      </div>
    </div>
  );
}
