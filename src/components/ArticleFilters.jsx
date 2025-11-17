import { useSearchParams } from "react-router-dom";

export default function ArticleFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const applyCategory = (category) => {
    searchParams.set("category", category);
    setSearchParams(searchParams);
  };

  const clearFilters = () => setSearchParams({}); // resets URL query

  return (
    <div style={{ marginBottom: "1rem" }}>
      <button onClick={() => applyCategory("tech")}>Tech</button>
      <button onClick={() => applyCategory("finance")}>Finance</button>

      <button style={{ marginLeft: "1rem" }} onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
}
