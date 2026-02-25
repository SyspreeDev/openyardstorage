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
  FiShield,
  FiTrendingUp,
  FiAlertCircle,
  FiMapPin,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function TemperatureControlledWarehouse() {

  useMeta(
    "Temperature Controlled Warehouse Storage Solutions | OSS FZC",
    "Discover reliable temperature control warehouse storage with OSS FZC. Safeguard your inventory and optimize protection and efficiency for valuable assets."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Precision Storage Solutions for Your Business"
        title="Protect and Preserve Your Inventory with Premier Temperature Control Warehouse Storage"
        subtitle="Ensure the Highest Quality Storage - Contact Us Today!"
        buttonText="Contact Us for Tailored Storage Solutions"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Facing temperature storage challenges?"
        title="Are Inconsistent Temperatures Damaging Your Goods?"
        description="When managing sensitive inventory, temperature fluctuations can wreak havoc. The lack of proper storage conditions often leads to compromised product quality, resulting in unsatisfied customers and financial loss."
        description2="Our temperature control warehouse storage provides the steady environment your goods require. Say goodbye to spoiled products and damaged goods—OSS FZC offers the peace of mind you need."
        rightTitle="We Solve Your Storage Woes"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiAlertCircle,
            title: "Inconsistent Temperature",
            text: "A reliable solution maintains optimal conditions.",
          },
          {
            icon: FiTrendingUp,
            title: "Product Degradation",
            text: "Our storage lowers risk, improving product shelf life.",
          },
          {
            icon: FiMapPin,
            title: "Limited Space",
            text: "Flexible solutions ensure inventory scalability.",
          },
          {
            icon: FiShield,
            title: "Compliance Issues",
            text: "Stay compliant with regulations effortlessly.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="OSS FZC – Your Key to Reliable Storage Management"
        title="Recognizing Our Unique Advantage"
        description="Our temperature control warehouse solutions combine cutting-edge technology with tailored service. We create a stable, regulated environment for sensitive inventory, leveraging advanced monitoring systems to adjust conditions as needed. As a result, our clients experience reduced spoilage, extended product longevity, and streamlined regulatory compliance."
        features={[
          {
            image: "/icons/cost.png",
            title: "Advanced Monitoring",
            description: "Seamless control delivers consistent temperatures.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Scalable Solutions",
            description: "Adapt to your changing inventory needs.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Regulatory Assurance",
            description: "Simplified compliance management brings peace of mind.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Tailored Support",
            description: "Customized solutions for your specific industry requirements.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Unwavering Commitment to Excellence"
        services={[
          {
            title: "Climate-Controlled Storage",
            image: "/images/services/flexible-yard.jpg",
            description: "Precision control maximizes product durability.",
          },
          {
            title: "Customized Storage Solutions",
            image: "/images/services/custom-storage.jpg",
            description: "Adaptable to unique client specifications.",
          },
          {
            title: "Advanced Security",
            image: "/images/services/security.jpg",
            description: "State-of-the-art systems protect your inventory.",
          },
          {
            title: "Inventory Management",
            image: "/images/services/logistics.jpg",
            description: "Simplifies tracking and logistics.",
          },
          {
            title: "Compliance Support Services",
            image: "/images/services/maintenance.jpg",
            description: "Ensures adherence to industry standards.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Our Proven Track Record"
        subtitle="Numbers That Reflect Our Success"
        stats={[
          { value: "30%", label: "Reduced Spoilage Rates" },
          { value: "15+", label: "Years of Expertise" },
          { value: "500+", label: "Clients Served" },
          { value: "98%", label: "Client Satisfaction Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Led by industry experts, our leadership team is committed to pushing the boundaries of excellence in temperature control warehouse storage.",
          },
          {
            title: "Our Team",
            description:
              "Our dedicated team includes specialists renowned for their innovative approaches in delivering storage solutions with creativity and precision.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Temperature Control Warehouse Storage Questions Answered"
        faqs={[
          {
            question: "What is temperature control warehouse storage?",
            answer:
              "Temperature control warehouse storage refers to facilities equipped with systems to maintain specific temperature conditions, ensuring that sensitive items are stored in optimal environments using advanced climate control technology.",
          },
          {
            question: "Why is temperature control important?",
            answer:
              "Maintaining precise temperatures preserves product quality and prevents spoilage, deterioration, or microbial growth, ensuring safety and compliance.",
          },
          {
            question: "How does OSS FZC ensure consistent temperatures?",
            answer:
              "We deploy state-of-the-art climate control technologies with automated monitoring systems and real-time sensors to maintain preset standards.",
          },
          {
            question: "Can temperature control reduce spoilage costs?",
            answer:
              "Yes, precision environments prolong product lifespan and significantly lower financial losses due to spoilage.",
          },
          {
            question: "Which industries require temperature control storage?",
            answer:
              "Pharmaceuticals, food & beverage, cosmetics, biotechnology, and electronics commonly require temperature-controlled environments.",
          },
          {
            question: "How does it impact compliance?",
            answer:
              "Proper storage helps companies meet regulatory standards with reliable monitoring systems and data records.",
          },
          {
            question: "Is temperature control storage energy-efficient?",
            answer:
              "Our systems use advanced insulation and energy-efficient technology to minimize consumption while maintaining precision.",
          },
          {
            question: "Does OSS FZC offer flexible storage?",
            answer:
              "Yes, we provide scalable solutions for both short-term and long-term storage needs.",
          },
          {
            question: "How are solutions tailored?",
            answer:
              "We assess each client’s unique requirements and customize storage environments accordingly.",
          },
          {
            question: "What security measures are in place?",
            answer:
              "Facilities are monitored 24/7 with HD cameras, secured access points, and alarm systems for complete protection.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Secure Your Inventory with Reliable Temperature Control Today"
        buttonText="Contact Us for Tailored Storage Solutions"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}