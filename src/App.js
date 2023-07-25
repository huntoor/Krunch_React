import { Routes, Route } from "react-router-dom";

import HomeSection from "./components/homePage/HomeSection";
import AboutSection from "./components/aboutPage/AboutSection";
import PortfolioSection from "./components/portfolioPage/PortfolioSection";
import ServicesSection from "./components/servicePage/ServiceSection";
import TeamSection from "./components/teamPage/TeamSection";
import BlogSection from "./components/blogPage/BlogSection";
import ContactSection from "./components/signInPage/SigninSection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/portfolio" element={<PortfolioSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/signin" element={<ContactSection />} />
      </Routes>
    </>
  );
}

export default App;