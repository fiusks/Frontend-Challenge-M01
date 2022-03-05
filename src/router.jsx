import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home/index";
import Portfolio from "./pages/portfolio/index";
import Contact from "./pages/contact/index";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default Router;
