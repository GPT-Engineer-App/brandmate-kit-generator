import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import BrandKit from "./pages/BrandKit.jsx";
import WebsiteBuilder from "./pages/WebsiteBuilder.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/brand-kit" element={<BrandKit />} />
        <Route exact path="/website-builder" element={<WebsiteBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;