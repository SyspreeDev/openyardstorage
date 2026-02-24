import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/home/page";
import OurStory from "./pages/about/OurStory";
import Founder from "./pages/about/Founder";
import VisionMission from "./pages/about/VisionMission";
import Inspiration from "./pages/about/Inspiration";
import YardForRentInSharjah from "./pages/services/yard-for-rent-sharjah";
import ContactUs from "./pages/contact-us/Contact-us";
import MedicalEquipmentandhealthcare from "./pages/industries-we-serve/medical";


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
        <Route path="/services/yard-for-rent-sharjah" element={<YardForRentInSharjah />} />
        <Route path="/industries/medical" element={<MedicalEquipmentandhealthcare />}
/>
        <Route path="/contact-us" element={<ContactUs />} />
        
 
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
