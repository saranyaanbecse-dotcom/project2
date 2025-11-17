import { useSearchParams, Link } from "react-router-dom";
import { articles } from "../data.js";
import ArticleFilters from "../components/ArticleFilters.jsx";

export default function ArticleBrowser() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || null;
  const sort = searchParams.get("sort") || "date";

  // Filter logic
  let filtered = [...articles];
  if (category) {
    filtered = filtered.filter((article) => article.category === category);
  }

  // Sort logic
  if (sort === "date") {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return (
    <div>
      <h1>Articles</h1>

      {/* Filter Buttons */}
      <ArticleFilters />

      {/* Article List */}
      <ul>
        {filtered.map((a) => (
          <li key={a.id}>
            <Link to={`/article/${a.slug}`}>{a.title}</Link>
            <span> — ({a.category})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
