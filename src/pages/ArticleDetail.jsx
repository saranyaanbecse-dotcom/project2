import { useParams, Link } from "react-router-dom";
import { articles } from "../data.js";

export default function ArticleDetail() {
  const { slug } = useParams();

  const article = articles.find((a) => a.slug === slug);

  if (!article) return <p>Article not found.</p>;

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Category: {article.category}</p>
      <p>Date: {article.date}</p>

      <Link to="/articles">← Back to Articles</Link>
    </div>
  );
}
