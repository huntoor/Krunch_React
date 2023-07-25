import { Routes, Route } from "react-router-dom";

import HomeSection from "./components/homePage/HomeSection";
import AboutSection from "./components/aboutPage/AboutSection";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/about" element={<AboutSection />} />
        {/* <Route path="/home" element={<HomeSection />} />
        <Route path="/home" element={<HomeSection />} /> */}
      </Routes>
    </>
  );
}

export default App;