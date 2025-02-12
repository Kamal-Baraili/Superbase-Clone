import "./styles/index.css";
import Nav from "./components/layout/nav/nav";
import Homepage from "./pages/homepage/page";
import Blog from "./pages/blogs/blogs";
import Enterprise from "./pages/enterprise/enterprise";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/enterprise" element={<Enterprise />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
