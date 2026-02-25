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
  FiAlertCircle,
  FiShield,
  FiTrendingUp,
  FiFileText,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function ShipSpareClearance() {

  useMeta(
    "Reliable Ship Spare Clearance Services | OSS FZC",
    "Get efficient ship spare clearance and logistics solutions with OSS FZC. Optimize maritime operations, reduce downtime, and streamline supply needs effortlessly."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Simplify Ship Management with Reliable Clearance"
        title="Seamlessly Navigate Ship Spare Clearance with Confidence"
        subtitle="Expedite Your Clearance Needs Today – Contact Our Experts!"
        buttonText="Contact Us Today for Expert Guidance"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Struggling with Ship Spare Logistics?"
        title="Eliminate Clearance Delays and Unforeseen Expenses"
        description="Navigating ship spare clearance can be a daunting task, with complex regulations, unexpected delays, and the looming threat of downtime. The maritime industry demands precision and speed, yet many face obstacles in coordinating logistics, meeting compliance standards, and managing shipment timelines."
        description2="These challenges can lead to costly delays, affecting vessel schedules and operational efficiency. OSS FZC understands these pain points and provides strategic solutions to streamline your clearance process, ensuring your operations run smoothly and timely."
        rightTitle="Conquer Challenges with Clever Solutions"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiFileText,
            title: "Regulatory Roadblocks",
            text: "Navigating customs with efficiency.",
          },
          {
            icon: FiTrendingUp,
            title: "Logistical Chaos",
            text: "Simplifying spare parts logistics.",
          },
          {
            icon: FiAlertCircle,
            title: "Costly Delays",
            text: "Eliminating unnecessary hold-ups.",
          },
          {
            icon: FiShield,
            title: "Compliance Complexity",
            text: "Ensuring adherence to regulations.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="Experience Strategic Excellence in Ship Spare Clearance"
        title="Transform Your Ship Spare Management"
        description="At OSS FZC, we offer unparalleled proficiency in ship spare clearance, shaping a seamless journey through maritime logistics. Our unique framework ensures compliance with all regulations while reducing delay risks. We prioritize efficiency, leveraging cutting-edge technology and industry expertise to enhance your operational workflow."
        features={[
          {
            image: "/icons/cost.png",
            title: "Seamless Integration",
            description: "Streamlined processes for hassle-free clearance.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Expertise at Hand",
            description: "Industry veterans guiding your logistics.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Technology Driven",
            description: "Cutting-edge solutions for modern challenges.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Custom Solutions",
            description: "Tailored strategies for unique maritime needs.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Comprehensive Ship Spare Solutions"
        services={[
          {
            title: "Documentation Services",
            image: "/images/services/flexible-yard.jpg",
            description: "Simplify complex paperwork and documentation.",
          },
          {
            title: "Customs Clearance",
            image: "/images/services/custom-storage.jpg",
            description: "Efficiently navigate through regulatory hurdles.",
          },
          {
            title: "Logistics Coordination",
            image: "/images/services/security.jpg",
            description: "Ensure smooth transit and delivery of spare parts.",
          },
          {
            title: "Real-Time Tracking",
            image: "/images/services/logistics.jpg",
            description: "Keep tabs on your shipments with advanced tracking.",
          },
          {
            title: "Cost Management",
            image: "/images/services/maintenance.jpg",
            description: "Optimize expenditure with strategic cost solutions.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Track Record of Excellence in Ship Spare Logistics"
        stats={[
          { value: "30%", label: "Reduction in Clearance Time" },
          { value: "15+", label: "Years of Maritime Experience" },
          { value: "500+", label: "Successful Clearances" },
          { value: "98%", label: "Client Satisfaction Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Our leadership is committed to maintaining excellence in ship spare clearance, guiding teams and clients with visionary strategies.",
          },
          {
            title: "Our Team",
            description:
              "Expertise meets innovation; our team excels in delivering ship spare clearance with precision and creativity.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Ship Spare Clearance Questions Answered"
        faqs={[
          {
            question: "What is ship spare clearance?",
            answer:
              "Ship spare clearance involves the customs clearance and logistics management of spare parts needed for ship maintenance and repair. It ensures regulatory compliance and timely delivery.",
          },
          {
            question: "Why is ship spare clearance important?",
            answer:
              "Proper clearance avoids delays, financial losses, and operational inefficiencies while ensuring vessels maintain scheduled operations.",
          },
          {
            question: "How does OSS FZC expedite clearance?",
            answer:
              "We leverage expertise and advanced technology to streamline logistics and optimize delivery schedules.",
          },
          {
            question: "What challenges can occur?",
            answer:
              "Challenges include regulatory compliance, logistics coordination, documentation errors, and unexpected delays.",
          },
          {
            question: "How can delays be avoided?",
            answer:
              "By partnering with OSS FZC for proactive clearance management and tailored solutions.",
          },
          {
            question: "What documents are required?",
            answer:
              "Invoices, packing lists, certificates of origin, and required permits are essential for smooth clearance.",
          },
          {
            question: "Can urgent clearances be handled?",
            answer:
              "Yes, we specialize in managing urgent ship spare clearances efficiently.",
          },
          {
            question: "Do you offer tracking?",
            answer:
              "Yes, our real-time tracking provides full shipment visibility.",
          },
          {
            question: "What are the costs involved?",
            answer:
              "Costs depend on spare type, destination, and regulatory requirements. We provide customized quotes.",
          },
          {
            question: "How do I get started?",
            answer:
              "Contact our team via website or phone to receive a customized clearance solution.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Revolutionize Your Ship Spare Management?"
        buttonText="Contact Us Today for Expert Guidance"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}