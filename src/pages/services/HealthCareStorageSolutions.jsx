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
  FiLock,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function HealthCareStorageSolutions() {

  useMeta(
    "Efficient Health Care Storage Solutions | OSS FZC",
    "Discover top-tier healthcare storage with OSS FZC. Streamline your facility with flexible, secure, and efficient storage solutions. Contact us today!"
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Revolutionizing Health Care Storage for Optimal Efficiency"
        title="Enhance Your Facility’s Capacity with Tailored Health Care Storage Solutions"
        subtitle="Unlock the Potential of Your Space Today - Contact Us for a Consultation"
        buttonText="Get Started with OSS FZC Solutions Today!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Are Cluttered Spaces Holding You Back?"
        title="Tackling the Chaos of Health Care Storage"
        description="Many health care facilities struggle with cramped spaces and disorganized storage, leading to inefficiencies and operational setbacks. Overcrowded rooms and inaccessible supplies affect staff performance and patient care quality."
        description2="OSS FZC provides advanced health care storage solutions designed to overcome these challenges through intelligent design, scalability, and secure systems that enable your facility to focus on patient care."
        rightTitle="Solutions to Transform Your Storage Challenges"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiTrendingUp,
            title: "Space Optimization",
            text: "Maximize every inch with innovative storage designs.",
          },
          {
            icon: FiAlertCircle,
            title: "Ease of Access",
            text: "Quick, organized access for medical supplies.",
          },
          {
            icon: FiLock,
            title: "Security Concerns",
            text: "Protect sensitive materials with top-tier security.",
          },
          {
            icon: FiShield,
            title: "Compliance Requirements",
            text: "Ensure storage systems meet regulatory standards.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="Experience Unmatched Efficiency and Security with Our Custom Solutions"
        title="The OSS FZC Advantage"
        description="OSS FZC excels in providing bespoke health care storage solutions, addressing the unique needs of medical facilities with innovation and precision. Our expert team designs storage systems that optimize space while ensuring accessibility, compliance, and security."
        features={[
          {
            image: "/icons/cost.png",
            title: "Customization",
            description: "Tailored solutions for your specific requirements.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Scalability",
            description: "Evolving storage that grows with your facility.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Innovation",
            description: "Cutting-edge designs for efficiency.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Security",
            description: "State-of-the-art protection for peace of mind.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Explore Our Comprehensive Health Care Storage Solutions"
        services={[
          {
            title: "Space Planning",
            image: "/images/services/flexible-yard.jpg",
            description: "Strategic layouts for maximum efficiency.",
          },
          {
            title: "Secure Document Storage",
            image: "/images/services/custom-storage.jpg",
            description: "Keep records safe and compliant.",
          },
          {
            title: "Medical Equipment Shelving",
            image: "/images/services/security.jpg",
            description: "Optimal organization for essential tools.",
          },
          {
            title: "Supply Chain Solutions",
            image: "/images/services/logistics.jpg",
            description: "Streamlining inventory management.",
          },
          {
            title: "Custom Storage Solutions",
            image: "/images/services/maintenance.jpg",
            description: "Unique designs tailored to your needs.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Unmatched Results in Effective Storage"
        subtitle="Delivering Proven Value and Efficiency"
        stats={[
          { value: "50%", label: "Reduction in Retrieval Time" },
          { value: "30%", label: "Improved Space Utilization" },
          { value: "100+", label: "Health Care Facilities Served" },
          { value: "98%", label: "Client Satisfaction Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "At OSS FZC, our leadership commits to excellence in health care storage, driving innovation from concept to implementation.",
          },
          {
            title: "Our Team",
            description:
              "Our expert team brings creativity and precision to every project, ensuring customized health care storage solutions.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Health Care Storage Questions Answered"
        faqs={[
          {
            question: "What types of health care storage solutions do you offer?",
            answer:
              "We offer equipment shelving, document storage, supply chain solutions, and fully customized storage systems tailored to health care facilities.",
          },
          {
            question: "How do you ensure compliance with health care regulations?",
            answer:
              "We stay updated with healthcare regulations and design systems aligned with legal and industry standards.",
          },
          {
            question: "Can solutions be customized?",
            answer:
              "Yes, all solutions are highly customizable based on spatial and operational requirements.",
          },
          {
            question: "How do you address security concerns?",
            answer:
              "We implement secured access zones, monitored storage environments, and durable systems.",
          },
          {
            question: "What benefits do your solutions provide?",
            answer:
              "Improved space utilization, enhanced security, reduced retrieval times, and scalability.",
          },
          {
            question: "Do solutions improve staff efficiency?",
            answer:
              "Yes, organized systems reduce retrieval time and improve operational productivity.",
          },
          {
            question: "What is the installation process like?",
            answer:
              "Our installation process is smooth and minimally disruptive to operations.",
          },
          {
            question: "Are solutions scalable?",
            answer:
              "Yes, modular designs allow expansion as facilities grow.",
          },
          {
            question: "How do solutions impact patient care?",
            answer:
              "Better organization improves accessibility, directly enhancing patient care.",
          },
          {
            question: "What support is provided after installation?",
            answer:
              "We offer ongoing support and maintenance services to ensure peak performance.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Health Care Facility?"
        buttonText="Get Started with OSS FZC Solutions Today!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}