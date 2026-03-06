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
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function LogisticTruckCompanySharjah() {

  useMeta(
    "Premier Logistic Truck Company in Sharjah | OSS FZC",
    "Reliable truck logistics in Sharjah with expert international truck shipping services, ensuring smooth, efficient transportation through our trusted solutions."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Get Your Cargo Moving with Ease"
        title="Reliable Logistic Truck Company in Sharjah for Seamless International Shipping"
        subtitle="Experience hassle-free logistics. Get a tailored quote today!"
        buttonText="Contact Us for a Personalized Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Facing Delays and Complexities?"
        title="Navigating Logistics Challenges in Sharjah and Beyond"
        description="Are you tired of dealing with unreliable logistic partners that leave your shipments delayed and your expectations unmet?"
        description2="Navigating the logistics landscape in Sharjah can be daunting, with its unique infrastructure challenges and regulatory hurdles. Traditional logistic companies often struggle to deliver on their promises, leaving you frustrated and incurring additional costs."
        rightTitle="Transform Your Logistics Experience"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Delayed Deliveries",
            text: "Say goodbye to frustrating shipment delays.",
          },
          {
            icon: FiDollarSign,
            title: "High Costs",
            text: "Reduce unnecessary expenses with efficient logistics.",
          },
          {
            icon: FiFileText,
            title: "Complex Regulations",
            text: "Simplify compliance with expert guidance.",
          },
          {
            icon: FiTrendingUp,
            title: "Limited Visibility",
            text: "Gain full transparency throughout your shipping process.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Experience Unmatched Logistics Efficiency"
        description="At Open Yard Storage, we redefine logistics by providing strategic solutions designed to meet the unique requirements of your cargo. Our logistic truck company in Sharjah is equipped with state-of-the-art technology and a team of seasoned experts."
        features={[
          {
            image: "/icons/cost.png",
            title: "Real-Time Tracking",
            description: "Stay informed with live shipment updates.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Cost-Effective Plans",
            description: "Double your savings with optimized routes.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Regulatory Expertise",
            description: "Simplifying international compliance laws.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Advanced Fleet",
            description: "Reliable trucks ensuring safe and speedy delivery.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Elevate Your Logistics Game"
        services={[
          {
            title: "Route Optimization",
            image: "/images/services/flexible-yard.jpg",
            description: "Precision planning for efficient deliveries.",
          },
          {
            title: "Cross-Border Shipping",
            image: "/images/services/custom-storage.jpg",
            description: "Seamless international transit solutions.",
          },
          {
            title: "Customs Clearance",
            image: "/images/services/security.jpg",
            description: "Expertise in navigating complex regulatory landscapes.",
          },
          {
            title: "Warehousing Solutions",
            image: "/images/services/logistics.jpg",
            description: "Secure, scalable storage for your inventory.",
          },
          {
            title: "24/7 Customer Support",
            image: "/images/services/maintenance.jpg",
            description: "Always available, always responsive.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Trust Built Through Excellence"
        stats={[
          { value: "30%", label: "Increase in Delivery Efficiency" },
          { value: "500+", label: "Successful Shipments Managed" },
          { value: "24/7", label: "Customer Support Available" },
          { value: "98%", label: "Client Satisfaction Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Our leadership is dedicated to unparalleled excellence in logistics, ensuring each service upholds our commitment to quality and innovation.",
          },
          {
            title: "Our Team",
            description:
              "Our expert team crafts logistics solutions with creativity and precision, guaranteeing successful outcomes for every client.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Logistic Truck Company in Sharjah Questions Answered"
        faqs={[
          {
            question: "What makes a logistic truck company in Sharjah unique?",
            answer:
              "A logistic truck company in Sharjah must navigate unique infrastructure and regulatory requirements. With Sharjah's strategic location, companies must ensure compliance, manage customs efficiently, and leverage local expertise to enhance delivery efficiency.",
          },
          {
            question: "How does international truck shipping with Open Yard Storage work?",
            answer:
              "Our process starts by understanding your cargo requirements. We manage documentation, route optimization, compliance, and tracking while using a well-maintained fleet for safe and efficient cross-border transportation.",
          },
          {
            question: "What compliance measures are required for international truck shipping?",
            answer:
              "International shipping requires customs documentation, tariffs, and country-specific regulations. Our compliance experts ensure all shipments meet necessary regulations to avoid delays and penalties.",
          },
          {
            question: "Can Open Yard Storage manage large-scale logistics?",
            answer:
              "Yes, we are fully equipped to manage logistics operations of any scale using advanced technology, strong networks, and experienced professionals.",
          },
          {
            question: "How does route optimization improve shipping efficiency?",
            answer:
              "Route optimization identifies the most efficient paths by analyzing traffic, road conditions, and fuel costs to minimize delays and reduce logistics expenses.",
          },
          {
            question: "What are the costs associated with truck logistics in Sharjah?",
            answer:
              "Costs vary depending on shipment size, distance, and service complexity. We provide transparent pricing with customized solutions tailored to your logistics needs.",
          },
          {
            question: "Do you offer shipment tracking?",
            answer:
              "Yes, we provide real-time tracking systems so clients can monitor cargo progress and stay informed at every stage of transportation.",
          },
          {
            question: "Which industries benefit from international truck shipping?",
            answer:
              "Industries such as manufacturing, retail, agriculture, and construction benefit significantly from reliable cross-border truck shipping services.",
          },
          {
            question: "How fast can Open Yard Storage deliver shipments internationally?",
            answer:
              "Delivery times depend on distance and route complexity, but our optimized logistics network ensures the fastest and most efficient transportation possible.",
          },
          {
            question: "How does Open Yard Storage ensure shipment safety?",
            answer:
              "We use advanced tracking systems, well-maintained fleets, and experienced logistics professionals to ensure every shipment reaches its destination safely.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Logistics?"
        buttonText="Contact Us for a Personalized Solution Today!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}