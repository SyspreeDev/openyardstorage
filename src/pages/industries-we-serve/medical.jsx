import InnerHero from "../../components/InnerHero";
import TrustedSlider from "../../components/TrustedSlider";

import ChallengeSection from "../../components/ChallengeSection";
import FeatureSection from "../../components/FeatureSection";
import ServiceGridSection from "../../components/ServiceGridSection";
import StatsSection from "../../components/StatsSection";
import DualInfoSection from "../../components/DualInfoSection";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";
import {
  FiMapPin,
  FiShield,
  FiTrendingUp,
  FiHeadphones,
  FiAlertCircle,
  FiDollarSign,
  FiFileText,
} from "react-icons/fi";
import { image } from "framer-motion/client";
import useMeta from "../../hooks/useMeta";




export default function MedicalEquipmentandhealthcare() {
   useMeta(
      "OSS Logistics | Open Yard Storage & Freight UAE",
      "OSS Logistics provides open yard storage, freight forwarding, warehousing and project logistics solutions across UAE."
    );
  return (
    <>
      <InnerHero
       eyebrow="REVOLUTIONIZING ACCESSIBILITY IN HEALTHCARE"
       subtitle="Transform Your Medical Equipment and Healthcare Storage Solutions. Discover how simplicity and efficiency can redefine your practice. Contact us today!"
        buttonText="Discover Our Journey"
        buttonLink="#story"
        backgroundImage="/images/industries/medical-bg.jpg"
      title="Medical Equipment Healthcare Storage Solutions " /> 

      <TrustedSlider />

      <ChallengeSection
  title="Unclutter Your Healthcare Facility "
  subtitle="Struggling with Dismal Storage Solutions?"
  description="Modern medical facilities often face a common yet critical challenge—effective storage solutions for medical equipment and healthcare supplies. Cramped spaces, inefficient organization, and lack of accessibility can hinder healthcare providers from delivering top-notch patient care. These issues can lead to operational delays, resource mismanagement, and increased expenses. At OSS 
, we understand that optimal storage isn't merely about stashing away equipment; it's about designing a system that enhances workflow, improves logistics, and saves time. We aim to provide the healthcare industry with state-of-the-art storage solutions that are both practical and affordable."
  description2=""
  rightTitle="Alleviating Your Storage Woes"  // 👈 ADD THIS
  rightBg="#C5F7FF"
  cards={[
    {
      icon: FiAlertCircle,
      title: "Space Constraints",
      text: "Tackle limited storage with efficient organization.",
    },
    {
      icon: FiFileText,
      title: "Resource Mismanagement",
      text: "Streamline inventory control and management.",
    },
    {
      icon: FiShield,
      title: "Security Risks",
      text: "Advanced security protecting your assets.",
    },
    {
      icon: FiDollarSign,
      title: "Cost Efficiency",
      text: "Minimize overhead costs with tailored storage solutions.",
    },
  ]}
/>
<FeatureSection
      eyebrow="The Open Yard Storage Difference"
      title="Discover the Open Yard Storage Advantage"
      description="At OSS , our unique framework transforms standard international shipping into a streamlined breeze. Our powerful network, proactive strategies, and cutting-edge technologies ensure efficiency and reliability. By minimizing downtime and optimizing resources, we elevate your logistics process. Our solutions focus on transparency, cost management, and timely deliveries, allowing businesses to flourish without international shipping air hassles."
      features={[
        {
          image: "/icons/cost.png",
          title: "Cost Efficiency",
          description: "Affordable, competitive pricing models.",
        },
        {
          image: "/icons/timely-Delivery.png",
          title: "Timely Delivery",
          description: "Precision-timed logistic strategies",
        },
        {
          image: "/icons/Regulatory-exper.png",
          title: "Regulatory Expertise",
          description: "TNavigating complex global requirements seamlessly.",
        },
        {
          image: "/icons/Real-time.png",
          title: "Real-Time Tracking",
          description: "Advanced systems for constant updates",
        },
      ]}
    />
      
     <ServiceGridSection
  eyebrow="Our Services"
  title="Comprehensive Air Freight Solutions"
  services={[
    {
      title: "Door-to-Door Service",
      image: "/images/services/flexible-yard.jpg",
      description:
        "Complete end-to-end logistics solutions ensuring seamless pickup and delivery.",
     
    },
    {
      title: "Express Shipping",
      image: "/images/services/custom-storage.jpg",
      description:
        "Fast and reliable shipping solutions for urgent deliveries.",
     
    },
    {
      title: "Customs Clearance",
      image: "/images/services/security.jpg",
      description:
        "Smooth customs handling with full regulatory compliance.",
      
    },
    {
      title: "Logistical Support",
      image: "/images/services/logistics.jpg",
      description:
        "Advanced tracking and coordinated freight management.",
     
    },
    {
      title: "Warehousing",
      image: "/images/services/maintenance.jpg",
      description:
        "Secure storage facilities designed for flexible operations.",
      
    },
  ]}
/>
<StatsSection
  title="Proven Success in Numbers"
  subtitle="Join the Growing Number of Satisfied Clients"
  stats={[
    {
      value: "260+",
      label: "Sq Feet Capacity",
    },
    {
      value: "15+",
      label: "Years of Experience",
    },
    {
      value: "50+",
      label: "Global Partners",
    },
    {
      value: "98%",
      label: "On time delivery",
    },
  ]}
/>
<DualInfoSection
  items={[
    {
      title: "About Us",
      description:
        "Our leadership is committed to delivering unparalleled excellence in international shipping air services, prioritizing reliability and customer satisfaction.",
    },
    {
      title: "Our Team Section",
      description:
        "Our dedicated team excels in deploying creative solutions with precision in international air freight logistics.",
    },
  ]}
/>

<FAQSection
  eyebrow="FAQ"
  title="International Air Freight Questions Answered"
  faqs={[
    {
      question: "What is the fastest way to ship internationally by air?",
      answer:
        "Shipping internationally by air requires a reliable logistics service provider who specializes in expedited global deliveries. At Open Yard Storage, we offer express shipping solutions tailored to meet urgent needs with efficiency and reliability. Utilizing a vast network and advanced logistics tools, we ensure your freight reaches its destination promptly, minimizing delays and streamlining customs processes. This translates to peace of mind and timely deliveries for businesses aiming to meet critical timelines.",
    },
    {
      question: "How do air freight costs compare to other shipping methods?",
      answer:
        "Air freight is generally faster but can be more expensive than sea freight. However, it provides significant advantages in speed, reliability, and reduced inventory holding costs, making it ideal for time-sensitive shipments.",
    },
    {
      question: "What factors affect the cost of international air freight?",
      answer:
        "Air freight pricing depends on shipment weight, volume, destination, urgency, customs duties, fuel surcharges, and special handling requirements. Dimensional weight also plays a crucial role in pricing calculations.",
    },
    {
      question: "How can businesses ensure compatibility with international regulations?",
      answer:
        "Businesses must comply with international shipping laws, customs documentation, and country-specific regulations. Partnering with experienced logistics providers ensures accurate documentation and smooth clearance processes.",
    },
    {
      question: "What types of goods are best suited for air freight services?",
      answer:
        "Air freight is ideal for high-value goods, perishables, medical supplies, electronics, urgent documents, and time-sensitive shipments requiring rapid delivery.",
    },
    {
      question: "How reliable are real-time tracking services for air freight?",
      answer:
        "Modern air freight services offer advanced real-time tracking systems that provide accurate updates throughout the shipping journey, ensuring full transparency and better planning.",
    },
    {
      question: "What happens if my shipment is delayed or lost?",
      answer:
        "In rare cases of delays or loss, logistics providers initiate tracking investigations and insurance claims if applicable. Professional freight partners proactively communicate updates and provide resolution support.",
    },
    {
      question: "Can I ship hazardous materials via air freight?",
      answer:
        "Yes, but hazardous materials must comply with IATA regulations. Proper packaging, labeling, and documentation are required for safe air transport.",
    },
    {
      question: "How do customs impact the air shipping process?",
      answer:
        "Customs clearance is a critical step in international air shipping. Proper documentation, compliance with regulations, and experienced handling reduce clearance delays.",
    },
    {
      question: "Why choose Open Yard Storage for international air shipping?",
      answer:
        "Open Yard Storage offers a strong global network, reliable delivery timelines, transparent pricing, regulatory expertise, and advanced tracking solutions to ensure seamless international air freight services.",
    },
  ]}
/>
<CTASection
  title="Ready to Upgrade Your Yard Space?"
  buttonText="Contact Us Today to Reserve Your Yard in Sharjah"
  buttonLink="/contact-us"
  backgroundImage="/images/services/Explore-More.jpg"
/>
    </>

  );}



