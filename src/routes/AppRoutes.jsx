import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Layout from "../components/layouts/Layout";
// Main routing configuration for the application

function AppRoutes() {
  return (
      <Routes>
        {/* Layout wrapper for all routes */}
        <Route element={<Layout />}>
          {/* Home page */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />

          {/* 404 Not Found - matches all undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default AppRoutes;
