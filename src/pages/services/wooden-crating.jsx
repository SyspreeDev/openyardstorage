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

export default function WoodenCrating() {

  useMeta(
    "Premier Wooden Crating Services | OSS FZC",
    "Discover expert wooden crating services with OSS FZC. Get durable, customized crating solutions to protect your products during transit. Contact us today!"
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Secure, Reliable & Tailored Wooden Crating Services"
        title="Elevate Your Packaging with Expert Wooden Crating Solutions"
        subtitle="Get a custom quote today for expertly-crafted, protective crating."
        buttonText="Contact Us for a Customized Solution!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Struggling to Protect Valuable Cargo?"
        title="Common Challenges in Wooden Crating"
        description="When it comes to transporting valuable or sensitive items, compromised protection can lead to damage, loss, and costly setbacks. Traditional crating solutions often fail to adapt to specific requirements, leaving gaps in security and functional usability. Furthermore, sourcing reliable and timely services can be overwhelming, especially when deadlines loom."
        description2="At OSS FZC, we understand the urgency of dependable and tailored crating solutions. Our wooden crating services are meticulously designed to safeguard diverse items against transit hazards. Our expert team focuses on creating custom solutions that eliminate the risk of damage, providing peace of mind and enhancing operational efficiency."
        rightTitle="Customized Solutions for Your Crating Needs"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiShield,
            title: "Inconsistent Safety",
            text: "Ordinary crates fall short in diverse scenarios.",
          },
          {
            icon: FiTrendingUp,
            title: "Time-Sensitive Deliveries",
            text: "Last-minute issues lead to delays and losses.",
          },
          {
            icon: FiAlertCircle,
            title: "Lack of Customization",
            text: "Generic crates don't fit unique item specifications.",
          },
          {
            icon: FiMapPin,
            title: "Environmental Concerns",
            text: "Non-sustainable materials increase carbon footprint.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Our Crating Solutions Set the Standard"
        description="Experience Unmatched Protection and Customization"
        features={[
          {
            image: "/icons/cost.png",
            title: "Custom-Made Crating",
            description: "Custom-made crating for all item shapes and sizes",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Sustainable Materials",
            description: "Sustainable materials for eco-friendly packaging",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Timeliness & Precision",
            description: "Timeliness and precision in execution",
          },
          {
            image: "/icons/Real-time.png",
            title: "Exceptional Service",
            description: "Exceptional service and competitive pricing",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Comprehensive Wooden Crating Solutions"
        services={[
          {
            title: "Custom Crating Design",
            image: "/images/services/flexible-yard.jpg",
            description: "Tailored plans for unique requirements.",
          },
          {
            title: "Eco-Friendly Materials",
            image: "/images/services/custom-storage.jpg",
            description: "Sustainable crating for a greener tomorrow.",
          },
          {
            title: "On-Demand Services",
            image: "/images/services/security.jpg",
            description: "Quick response for urgent needs.",
          },
          {
            title: "Global Shipping Assistance",
            image: "/images/services/logistics.jpg",
            description: "Coordinating logistics worldwide.",
          },
          {
            title: "Repair & Maintenance",
            image: "/images/services/maintenance.jpg",
            description: "Keeping crates in top condition.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Empowering Solutions with Tangible Results"
        stats={[
          { value: "100%", label: "Damage-Free Transportation Record" },
          { value: "15+", label: "Years of Experience" },
          { value: "500+", label: "Custom Crates Delivered" },
          { value: "98%", label: "Client Satisfaction Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "At OSS FZC, our leadership is committed to delivering excellence in wooden crating solutions, ensuring each package's secure and efficient journey from start to finish.",
          },
          {
            title: "Our Team",
            description:
              "With a dynamic team of experts, we excel in delivering creative and precise wooden crating services tailored to your needs.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Wooden Crating Questions Answered"
        faqs={[
          {
            question: "What are wooden crating services?",
            answer:
              "Wooden crating services involve designing and constructing custom wooden crates to protect goods during shipping or storage. These services are vital for ensuring safety and preventing damage to valuable or delicate items. Our wooden crating services focus on enhancing the structural integrity and fit of the crates, tailored to each item's specifications, resulting in optimum protection and security throughout transit.",
          },
          {
            question: "Why choose wooden crates over other materials?",
            answer:
              "Wooden crates offer durability and strength unmatched by many alternative materials. They are versatile and can be custom-designed to fit the unique dimensions and needs of each product. Our focus on sustainable wood ensures environmentally friendly choices without compromising quality. Wooden crating services provide superior cushioning, breathability for certain goods, and excellent stacking capabilities for secure shipping and storage.",
          },
          {
            question: "How do your services ensure eco-friendliness?",
            answer:
              "Our wooden crating services emphasize sustainability through the use of responsibly sourced wood and eco-friendly construction processes. By choosing materials that are biodegradable and recyclable, we reduce environmental impact while providing high-quality crating solutions.",
          },
          {
            question: "Are custom crates more beneficial?",
            answer:
              "Absolutely. Custom crates offer precision fit and added protection tailored to specific items, reducing the risks associated with transportation.",
          },
          {
            question: "How do wooden crating services support logistics?",
            answer:
              "Wooden crating services streamline logistics by ensuring goods are packed securely, minimizing the risk of damage during transit.",
          },
          {
            question: "What industries benefit most from wooden crating?",
            answer:
              "Industries ranging from manufacturing, art, and electronics to logistics benefit from our wooden crating services.",
          },
          {
            question: "How quickly can custom crates be produced?",
            answer:
              "Depending on the complexity and size of the order, custom crates can be designed and manufactured swiftly.",
          },
          {
            question: "Can wooden crates be reused?",
            answer:
              "Yes, our high-quality wooden crates are designed to be reused, providing a cost-effective and sustainable option.",
          },
          {
            question: "What customization options are available?",
            answer:
              "We offer size, design, type of wood, and internal padding customization options to ensure maximum protection.",
          },
          {
            question: "How does OSS FZC ensure durability in your crates?",
            answer:
              "We combine advanced techniques and rigorous quality control processes to ensure long-lasting durability.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Protect Your Valuables with Our Expert Crating Services"
        buttonText="Contact Us for a Customized Solution!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}