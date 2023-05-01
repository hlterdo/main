import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AdminPage from "./pages/AdminPage";
import PostEditor from "./components/PostEditor";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id/:subpage" element={<ProjectPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/test" element={<PostEditor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
