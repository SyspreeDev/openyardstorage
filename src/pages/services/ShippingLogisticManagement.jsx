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
  FiClock,
  FiMessageCircle,
  FiTrendingUp,
  FiEye,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function ShippingLogisticManagement() {

  useMeta(
    "Leading Shipping and Logistic Management Services | OSS FZC",
    "Unlock efficient shipping and logistics with OSS FZC. Streamline operations with tailored, timely, and cost-effective solutions. Contact us today."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Streamlining Logistics, Elevating Success."
        title="Transform Your Operations with Premier Shipping And Logistic Management Solutions"
        subtitle="Ready to Revolutionize Your Supply Chain? Contact Us Today!"
        buttonText="Schedule a Consultation Now!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Navigating the Complexities of Shipping and Logistics?"
        title="Overcome Operational Hurdles with Precision"
        description="Shipping and logistics management can feel like an intricate puzzle with countless moving pieces. Delays, miscommunication, and inefficiencies can lead to costly errors and customer dissatisfaction."
        description2="Fragmented supply chains often result in loss of control, impacting your bottom line. At OpenYard Storage, we understand these pressing challenges deeply. Our tailored solutions in Shipping And Logistic Management streamline operations, enhance transparency, and strengthen your supply chain."
        rightTitle="Efficient Solutions for All Your Challenges"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Reduce Delays",
            text: "Minimize downtime and logistical disruptions.",
          },
          {
            icon: FiMessageCircle,
            title: "Enhance Communication",
            text: "Ensure seamless connectivity across operations.",
          },
          {
            icon: FiTrendingUp,
            title: "Boost Efficiency",
            text: "Optimize processes to save time and resources.",
          },
          {
            icon: FiEye,
            title: "Maximize Control",
            text: "Gain complete visibility over your supply chain.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="Delivering Excellence in Shipping And Logistic Management"
        title="Discover the OSS FZC Edge"
        description="At OpenYard Storage, we pride ourselves on delivering unmatched Shipping And Logistic Management through innovation and reliability. Our proprietary approach utilizes cutting-edge technology and experienced insights to deliver tailored solutions that fit seamlessly into your existing operations."
        features={[
          {
            image: "/icons/cost.png",
            title: "Innovative Technology",
            description: "Harness the latest in logistics tech.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Tailored Solutions",
            description: "Customized strategies for your needs.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Unmatched Expertise",
            description: "Professional insights driving results.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Proven Track Record",
            description: "Trusted success across industries.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Comprehensive Logistics Capabilities"
        services={[
          {
            title: "Integrated Supply Chain Solutions",
            image: "/images/services/flexible-yard.jpg",
            description:
              "Seamlessly connect and optimize all supply chain elements.",
          },
          {
            title: "Advanced Tracking Systems",
            image: "/images/services/custom-storage.jpg",
            description:
              "Real-time monitoring of shipments ensures timely delivery.",
          },
          {
            title: "Cost Efficiency Strategies",
            image: "/images/services/security.jpg",
            description:
              "Maximize budget impact with optimized logistics spending.",
          },
          {
            title: "Risk Management Services",
            image: "/images/services/logistics.jpg",
            description:
              "Proactively identify and mitigate supply chain risks.",
          },
          {
            title: "Logistics Consulting",
            image: "/images/services/maintenance.jpg",
            description:
              "Expert guidance tailored to improve your operations.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Hundreds of Clients, Millions in Savings"
        stats={[
          { value: "30%", label: "Cost Reduction Achieved" },
          { value: "500+", label: "Clients Served" },
          { value: "24/7", label: "Operational Support" },
          { value: "98%", label: "On-Time Delivery Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "With a dedicated leadership team, OpenYard Storage ensures unparalleled excellence in Shipping And Logistic Management.",
          },
          {
            title: "Our Team",
            description:
              "Our experts blend creativity and precision to deliver superior logistics solutions, every step of the way.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Shipping And Logistic Management Questions Answered"
        faqs={[
          {
            question: "Why is efficient shipping and logistic management crucial?",
            answer:
              "Efficient management directly impacts delivery times, customer satisfaction, and operational costs while improving supply chain visibility.",
          },
          {
            question: "How can technology improve shipping logistics?",
            answer:
              "Technology enables automation, route optimization, forecasting, and real-time tracking for better decision-making.",
          },
          {
            question: "What industries benefit most?",
            answer:
              "E-commerce, manufacturing, healthcare, retail, and infrastructure sectors benefit greatly.",
          },
          {
            question: "How does OpenYard Storage enhance operations?",
            answer:
              "By leveraging technology and expert insights to streamline processes and reduce operational costs.",
          },
          {
            question: "What are common challenges?",
            answer:
              "Shipment delays, cost overruns, compliance issues, and supply chain disruptions.",
          },
          {
            question: "How can businesses reduce logistics costs?",
            answer:
              "Through optimized routing, consolidation, warehouse efficiency, and tech-driven tracking systems.",
          },
          {
            question: "What role does customer service play?",
            answer:
              "Clear communication and proactive problem-solving enhance customer satisfaction and loyalty.",
          },
          {
            question: "Why is transparency important?",
            answer:
              "Transparency builds trust by providing real-time visibility and proactive issue resolution.",
          },
          {
            question: "Can logistics management be customized?",
            answer:
              "Yes, strategies can be tailored based on industry, size, and operational goals.",
          },
          {
            question: "What future trends influence logistics?",
            answer:
              "AI forecasting, automation, autonomous vehicles, and sustainable logistics innovations.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Take Control of Your Logistics Today"
        buttonText="Schedule a Consultation Now!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}