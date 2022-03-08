import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home/index";
import Portfolio from "./pages/portfolio/main";
import Contact from "./pages/contact/index";
import Manage from "./pages/portfolio/manage";
import Bookmark from "./pages/portfolio/bookmark";
import Insure from "./pages/portfolio/insure";
import Fylo from "./pages/portfolio/fylo";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/manage" element={<Manage />} />
        <Route path="portfolio/bookmark" element={<Bookmark />} />
        <Route path="portfolio/insure" element={<Insure />} />
        <Route path="portfolio/fylo" element={<Fylo />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default Router;
