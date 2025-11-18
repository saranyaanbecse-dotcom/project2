import { Routes, Route, Navigate } from "react-router-dom";
import ArticleBrowser from "./pages/ArticleBrowser";


export default function App() {
  return (
    <Routes>
      <Route path="/articles" element={<ArticleBrowser />} />
      <Route path="*" element={<Navigate to="/articles" />} />
    </Routes>
  );
}export default function App() {
  return (
    <Routes>
      <Route path="/articles" element={<ArticleBrowser />} />
      <Route path="*" element={<Navigate to="/articles" />} />
    </Routes>
  );
}