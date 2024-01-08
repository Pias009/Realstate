import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ContactPageDesktop = React.lazy(() => import("pages/ContactPageDesktop"));
const ServicesPageDesktop = React.lazy(
  () => import("pages/ServicesPageDesktop"),
);
const PropertyDetailsPageDesktop = React.lazy(
  () => import("pages/PropertyDetailsPageDesktop"),
);
const PropertiesPageDesktop = React.lazy(
  () => import("pages/PropertiesPageDesktop"),
);
const AboutUsPageDesktop = React.lazy(() => import("pages/AboutUsPageDesktop"));
const HomePageDesktop = React.lazy(() => import("pages/HomePageDesktop"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepagedesktop" element={<HomePageDesktop />} />
          <Route path="/aboutuspagedesktop" element={<AboutUsPageDesktop />} />
          <Route
            path="/propertiespagedesktop"
            element={<PropertiesPageDesktop />}
          />
          <Route
            path="/propertydetailspagedesktop"
            element={<PropertyDetailsPageDesktop />}
          />
          <Route
            path="/servicespagedesktop"
            element={<ServicesPageDesktop />}
          />
          <Route path="/contactpagedesktop" element={<ContactPageDesktop />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
