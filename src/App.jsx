import { Routes, Route } from "react-router-dom";
import ArticleBrowser from "./pages/ArticleBrowser";
import ArticleDetail from "./pages/ArticleDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/articles" element={<ArticleBrowser />} />
      <Route path="/article/:slug" element={<ArticleDetail />} />
    </Routes>
  );
}
