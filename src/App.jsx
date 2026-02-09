import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/home/page";
import OurStory from "./pages/about/OurStory";
import Founder from "./pages/about/Founder";
import VisionMission from "./pages/about/VisionMission";
import Inspiration from "./pages/about/Inspiration";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/Founder" element={<Founder />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
        <Route path="/about/inspiration" element={<Inspiration />} />
 
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
