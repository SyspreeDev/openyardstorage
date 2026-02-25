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
import WeatherfordDrillingInternational from "./pages/projects/weatherford-drilling-International";
import WoodenCrating from "./pages/services/wooden-crating";
import TemperatureControlledWarehouse from "./pages/services/temperature-controlled-warehouse";
import StorageWarehouseForRent from "./pages/services/storage-warehouse-for-rent";
import ShipSpareClearance from "./pages/services/ship-spare-clearance";
import MedicalEquipmentHealthcareStorage from "./pages/services/MedicalEquipmentHealthcareStorage";
import LogisticsTransportSharjah from "./pages/services/LogisticsTransportSharjah";
import InventoryManagementSolutions from "./pages/services/InventoryManagementSolutions";

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
        <Route path="/industries/medical" element={<MedicalEquipmentandhealthcare />}/>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/projects/weatherford-drilling-international" element={<WeatherfordDrillingInternational />}/>
        <Route path="/services/wooden-crating" element={<WoodenCrating />} />
        <Route path="/services/temperature-controlled-warehouse" element={<TemperatureControlledWarehouse />} />
        <Route path="/services/storage-warehouse-for-rent" element={<StorageWarehouseForRent />} />
        <Route path="/services/ship-spare-clearance" element={<ShipSpareClearance />} />
        <Route
          path="/services/medical-equipment-healthcare-storage"
          element={<MedicalEquipmentHealthcareStorage />}
        />
        <Route
          path="/services/logistics-transport-sharjah"
          element={<LogisticsTransportSharjah />}
        />
        <Route
          path="/services/inventory-management-solutions"
          element={<InventoryManagementSolutions />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
