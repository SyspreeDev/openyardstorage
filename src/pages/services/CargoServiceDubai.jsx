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
  FiFileText,
  FiClock,
  FiShield,
  FiMap
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function CargoServiceDubai() {

  useMeta(
    "Reliable Cargo Service to Dubai | OSS FZC",
    "OSS FZC provides efficient and secure cargo service to Dubai with advanced logistics solutions and seamless shipping management."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Effortless Cargo Transition to Dubai"
        title="Experience Seamless Cargo Service to Dubai with Unmatched Reliability"
        subtitle="Transform Your Logistics Today – Get a Free Quote!"
        buttonText="Get a Free Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Navigating Cargo Complexities?"
        title="Why Traditional Cargo Services Fall Short"
        description="Shipping cargo to Dubai can involve complex documentation, unexpected delays, and coordination challenges."
        description2="OSS FZC simplifies logistics with streamlined shipping processes, real-time tracking, and expert cargo management for businesses shipping to Dubai."
        rightTitle="Simplifying Your Cargo Journey"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiMap,
            title: "Logistical Maze",
            text: "Navigate complex customs and logistics requirements."
          },
          {
            icon: FiClock,
            title: "Time Delays",
            text: "Optimized shipping ensures timely delivery."
          },
          {
            icon: FiShield,
            title: "Security Concerns",
            text: "Advanced cargo protection systems."
          },
          {
            icon: FiFileText,
            title: "Inefficient Tracking",
            text: "Real-time tracking for complete transparency."
          }
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="Efficiency Meets Excellence"
        title="Innovative Solutions Tailored for Dubai Cargo Services"
        description="OSS FZC delivers reliable cargo service to Dubai by combining advanced logistics technology with expert shipping coordination."
        features={[
          {
            image: "/icons/Real-time.png",
            title: "Real-Time Updates",
            description: "Stay informed at every step of the shipment journey."
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Customized Solutions",
            description: "Shipping strategies tailored to your business."
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Expert Guidance",
            description: "Professional support navigating shipping regulations."
          },
          {
            image: "/icons/Real-time.png",
            title: "Advanced Tracking",
            description: "Cutting-edge shipment traceability systems."
          }
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Cargo Services"
        title="Comprehensive Cargo Solutions"
        services={[
          {
            title: "Complete Customs Assistance",
            image: "/images/services/security.jpg",
            description: "Professional handling of export paperwork and procedures."
          },
          {
            title: "Sea Freight Services",
            image: "/images/services/logistics.jpg",
            description: "Cost-effective shipping for large cargo volumes."
          },
          {
            title: "Air Freight Services",
            image: "/images/services/flexible-yard.jpg",
            description: "Fast delivery for urgent shipments."
          },
          {
            title: "Warehousing Solutions",
            image: "/images/services/custom-storage.jpg",
            description: "Safe and flexible storage for cargo management."
          },
          {
            title: "Personalized Cargo Solutions",
            image: "/images/services/maintenance.jpg",
            description: "Tailored shipping strategies for unique business needs."
          }
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Reinforcing Confidence with Every Shipment"
        stats={[
          { value: "30%", label: "Reduced Transit Time" },
          { value: "500+", label: "Successful Cargo Deliveries" },
          { value: "24/7", label: "Shipment Monitoring" },
          { value: "99%", label: "Client Satisfaction" }
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Open Yard Storage leads the logistics industry with reliable cargo services to Dubai, built on trust, expertise, and operational excellence."
          },
          {
            title: "Our Team",
            description:
              "Our logistics professionals combine expertise and precision to deliver efficient cargo service solutions tailored for Dubai shipping."
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
  eyebrow="FAQ"
  title="Your Cargo Service to Dubai Questions Answered"
  faqs={[
    {
      question: "What documentation is required for cargo service to Dubai?",
      answer:
        "Generally, you'll need commercial invoices, packing lists, certificates of origin, and shipping instructions. At Open Yard Storage, our experts handle the paperwork for you, ensuring compliance and accuracy, allowing you to focus on your core business activities while we manage the complexities of exporting to Dubai."
    },
    {
      question: "How long does it take for cargo to reach Dubai?",
      answer:
        "Transit times vary based on the mode of transportation. Sea freight typically takes a few weeks, while air freight can be completed in a few days. Our team provides a tailored timeline for your shipments, offering you the best options based on urgency and budget."
    },
    {
      question: "Can I track my cargo in real-time?",
      answer:
        "Absolutely! Our advanced tracking technology allows you to monitor your shipment's progress at any time. This transparency ensures you're always informed about the whereabouts and condition of your cargo, bolstering your confidence and satisfaction."
    },
    {
      question: "What about cargo insurance for shipments to Dubai?",
      answer:
        "We strongly recommend cargo insurance for added protection. It covers unforeseen events during transit, such as theft or damage. At Open Yard Storage, we provide guidance and options to secure the necessary insurance, minimizing risks associated with any unforeseeable incidents."
    },
    {
      question: "Are there size limitations for shipments to Dubai?",
      answer:
        "We handle a wide range of cargo sizes, from small parcels to oversized shipments. Our fleet and partnerships allow us to accommodate your specific shipping needs efficiently without restrictions, making us a versatile and reliable choice for all your cargo requirements."
    },
    {
      question: "What security measures are in place for cargo?",
      answer:
        "With our cutting-edge technology and protocols, your cargo is under stringent security. From GPS tracking to secured facilities, we prioritize protection, offering robust security protocols to ensure your cargo's safety throughout its journey to Dubai."
    },
    {
      question: "What customs regulations should I be aware of?",
      answer:
        "Customs regulations can be complex, but with our expert guidance, navigating them becomes effortless. We stay updated with the latest compliance requirements, ensuring smooth customs clearance and avoiding unnecessary delays or complications."
    },
    {
      question: "How can Open Yard Storage optimize my shipping costs to Dubai?",
      answer:
        "We offer competitive pricing models tailored to your needs, utilizing consolidation, and choosing the most cost-effective routes and modes. Our strategies are aimed at driving down costs while maintaining prompt delivery and service excellence."
    },
    {
      question: "Does Open Yard Storage offer warehousing solutions in Dubai?",
      answer:
        "Yes, we provide comprehensive warehousing solutions, including storage, handling, and distribution. Whether you need short-term or long-term facilities, our flexible options ensure your cargo is stored safely with easy accessibility."
    },
    {
      question: "What makes Open Yard Storage different from other cargo services?",
      answer:
        "Our bespoke approach, advanced technology integration, and client-centric solutions distinguish us from other cargo services. We prioritize efficiency, reliability, and seamless delivery to ensure that your cargo service experience with us is exceptional, providing unmatched dedication to your needs."
    }
  ]}
/>

      {/* CTA */}
      <CTASection
        title="Ready to Revolutionize Your Cargo Journey?"
        buttonText="Contact Us Today for Customized Solutions"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}