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
  FiDollarSign,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function MedicalEquipmentHealthcareStorage() {

  useMeta(
    "Medical Equipment Healthcare Storage Solutions | OSS FZC",
    "Revolutionize medical equipment and healthcare storage with OSS FZC. Discover efficient, secure, and customizable healthcare storage solutions for your facility."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Revolutionizing Accessibility in Healthcare"
        title="Transform Your Medical Equipment and Healthcare Storage Solutions"
        subtitle="Discover how simplicity and efficiency can redefine your practice. Contact us today!"
        buttonText="Get in Touch with Us Today!"
        buttonLink="/contact-us"
        backgroundImage="/images/industries/medical-bg.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Struggling with Dismal Storage Solutions?"
        title="Unclutter Your Healthcare Facility"
        description="Modern medical facilities often face a common yet critical challenge—effective storage solutions for medical equipment and healthcare supplies. Cramped spaces, inefficient organization, and lack of accessibility can hinder healthcare providers from delivering top-notch patient care."
        description2="These issues can lead to operational delays, resource mismanagement, and increased expenses. At OSS FZC, we understand that optimal storage isn't merely about stashing away equipment; it's about designing a system that enhances workflow, improves logistics, and saves time. We aim to provide the healthcare industry with state-of-the-art storage solutions that are both practical and affordable."
        rightTitle="Alleviating Your Storage Woes"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiAlertCircle,
            title: "Space Constraints",
            text: "Tackle limited storage with efficient organization.",
          },
          {
            icon: FiShield,
            title: "Accessibility Issues",
            text: "Ensure quick access to critical medical equipment.",
          },
          {
            icon: FiTrendingUp,
            title: "Resource Mismanagement",
            text: "Streamline inventory control and management.",
          },
          {
            icon: FiDollarSign,
            title: "Cost Efficiency",
            text: "Minimize overhead costs with tailored storage solutions.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="Tailored Solutions That Deliver Exceptional Results"
        title="Elevate Your Healthcare Facility's Efficiency"
        description="OSS FZC offers a revolutionary approach to medical equipment and healthcare storage solutions. We pride ourselves on crafting bespoke systems that seamlessly integrate into your existing space. Our innovative shelving and organizational tools are designed to maximize space, boost accessibility, and streamline operations—so practitioners can focus on what truly matters: patient care."
        features={[
          {
            image: "/icons/cost.png",
            title: "Customizability",
            description: "Tailored solutions for unique healthcare requirements.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Compliance",
            description: "Adherence to industry standards and regulations.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Efficiency",
            description: "Boost operational productivity and workflow.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Affordability",
            description: "Cost-effective solutions without compromising quality.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Comprehensive Storage Solutions for Healthcare Needs"
        services={[
          {
            title: "Smart Shelving Systems",
            image: "/images/services/flexible-yard.jpg",
            description: "Optimize space with custom shelving that adapts to your needs.",
          },
          {
            title: "Mobile Storage Units",
            image: "/images/services/custom-storage.jpg",
            description: "Enhance flexibility and accessibility across your facility.",
          },
          {
            title: "Secure Cabinets",
            image: "/images/services/security.jpg",
            description: "Ensure the safety of sensitive medical supplies and equipment.",
          },
          {
            title: "Inventory Management Tools",
            image: "/images/services/logistics.jpg",
            description: "Streamline stock management with cutting-edge technology.",
          },
          {
            title: "Space Planning Consultation",
            image: "/images/services/maintenance.jpg",
            description: "Expert guidance tailored to maximize facility efficiency.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Join the ranks of efficient care providers"
        stats={[
          { value: "40%", label: "Increase in Storage Capacity" },
          { value: "50%", label: "Reduction in Retrieval Time" },
          { value: "15+", label: "Years of Industry Experience" },
          { value: "98%", label: "Client Satisfaction Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Founded by industry veterans, OSS FZC is committed to elevating storage solutions to new heights within the healthcare sector.",
          },
          {
            title: "Our Team",
            description:
              "Our expert team combines innovation and precision to deliver unmatched storage solutions for your healthcare needs.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Medical Equipment Storage Questions Answered"
        faqs={[
          {
            question: "How do your storage solutions benefit medical facilities?",
            answer:
              "Our storage solutions maximize space and improve workflow, ensuring increased accessibility for medical equipment and supplies.",
          },
          {
            question: "Is your storage equipment customizable?",
            answer:
              "Yes, we provide bespoke, customizable solutions tailored to specific spatial constraints and operational workflows.",
          },
          {
            question: "Are your solutions compliant with healthcare regulations?",
            answer:
              "Absolutely. All storage solutions adhere strictly to healthcare industry regulations.",
          },
          {
            question: "Can your solutions help reduce operational costs?",
            answer:
              "Yes, optimizing space and efficiency contributes significantly to operational cost reduction.",
          },
          {
            question: "How does OSS FZC ensure quality?",
            answer:
              "We use high-grade materials and advanced design technology backed by strict quality assessments.",
          },
          {
            question: "What types of medical equipment can be accommodated?",
            answer:
              "From large diagnostic machines to smaller instruments, our systems suit varied equipment sizes.",
          },
          {
            question: "Will systems integrate with existing infrastructure?",
            answer:
              "Yes, solutions are designed for seamless integration into your facility.",
          },
          {
            question: "Do you offer installation services?",
            answer:
              "Yes, our skilled technicians provide full installation services.",
          },
          {
            question: "What after-sales support is provided?",
            answer:
              "We offer maintenance services and professional advice for continued efficiency.",
          },
          {
            question: "How long does implementation take?",
            answer:
              "Implementation time depends on project complexity, but we ensure minimal disruption.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Revolutionize Your Storage Solutions?"
        buttonText="Get in Touch with Us Today!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}