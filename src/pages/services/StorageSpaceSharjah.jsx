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
  FiUnlock,
  FiRepeat,
  FiDollarSign,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function StorageSpaceSharjah() {

  useMeta(
    "Reliable Storage Space in Sharjah | OSS FZC",
    "Discover secure, flexible storage space in Sharjah with Open Yard Storage. Simplify your life with tailored, accessible, and reliable storage solutions today."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Secure Your Space, Simplify Your Life"
        title="Discover Premier Storage Space in Sharjah"
        subtitle="Experience the convenience of tailored storage solutions. Get started today!"
        buttonText="Contact Us Now"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Tired of Clutter? We've Got Solutions!"
        title="Overwhelmed by Storage Challenges in Sharjah?"
        description="Finding adequate storage space in Sharjah can be daunting. With bustling business hubs and residential areas rapidly expanding, locating a secure and accessible space is more challenging than ever."
        description2="At Open Yard Storage, we recognize these problems and provide seamless solutions that streamline operations and fulfill your storage needs."
        rightTitle="Streamlined Security"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiShield,
            title: "Streamlined Security",
            text: "Ensure your belongings are safe with our state-of-the-art security systems.",
          },
          {
            icon: FiUnlock,
            title: "Effortless Access",
            text: "Experience hassle-free access to your stored items whenever you need them.",
          },
          {
            icon: FiRepeat,
            title: "Flexible Options",
            text: "Choose from a diverse range of storage spaces to suit your unique needs.",
          },
          {
            icon: FiDollarSign,
            title: "Cost-Effective Solutions",
            text: "Save money with our competitively priced, tailored storage plans.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Transform Your Storage Experience with OSS FZC"
        description="At Open Yard Storage, we deliver unmatched services through precise planning and innovative approaches. Our Sharjah-based team combines advanced logistics with customer-focused service to ensure the best storage experience."
        features={[
          {
            image: "/icons/cost.png",
            title: "Tailored Solutions",
            description: "Customized storage plans for every need.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Unmatched Security",
            description: "Cutting-edge security technology for peace of mind.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Exceptional Accessibility",
            description: "24/7 access for ultimate convenience.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Expert Support",
            description: "A dedicated team ready to assist you at every step.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Enhance Your Storage Capabilities"
        services={[
          {
            title: "Personal Storage Solutions",
            image: "/images/services/flexible-yard.jpg",
            description: "Flexible spaces perfect for personal belongings and valuables.",
          },
          {
            title: "Business Storage Options",
            image: "/images/services/custom-storage.jpg",
            description: "Streamlined solutions to optimize your business operations in Sharjah.",
          },
          {
            title: "Document Storage",
            image: "/images/services/security.jpg",
            description: "Secure and organized systems for all important files.",
          },
          {
            title: "Vehicle Storage",
            image: "/images/services/logistics.jpg",
            description: "Safe and reliable storage for cars, boats, and more.",
          },
          {
            title: "Warehousing Solutions",
            image: "/images/services/maintenance.jpg",
            description: "Comprehensive services for large-scale business inventory.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Thousands of items securely stored and satisfied clients across Sharjah."
        stats={[
          { value: "30%", label: "Efficiency Improvement" },
          { value: "24/7", label: "Secure Access" },
          { value: "500+", label: "Satisfied Clients" },
          { value: "99%", label: "Customer Satisfaction" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Open Yard Storage is led by industry experts committed to providing exceptional storage solutions in Sharjah.",
          },
          {
            title: "Our Team",
            description:
              "Our team brings expertise and creativity to deliver precise, tailored storage solutions for every client.",
          },
        ]}
      />

      {/* FULL FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Storage Space Questions Answered"
        faqs={[
          {
            question: "What are the key factors to consider when choosing storage space in Sharjah?",
            answer:
              "When selecting storage space in Sharjah, consider security, accessibility, cost, and the type of items you're storing. Our facilities are equipped with 24/7 surveillance and access solutions, ensuring maximum convenience and peace of mind. Our competitive pricing and customizable storage plans cater to individual and business needs alike.",
          },
          {
            question: "How secure are your storage units in Sharjah?",
            answer:
              "Our Sharjah facilities are fortified with advanced security measures including CCTV surveillance, alarm systems, and secure access protocols to ensure complete protection.",
          },
          {
            question: "Do you offer flexible storage durations?",
            answer:
              "Yes, we offer flexible short-term and long-term storage plans tailored to your timeframe and budget.",
          },
          {
            question: "How do I access my storage unit?",
            answer:
              "Our Sharjah locations provide 24/7 access with secure passcodes and keycard entry systems.",
          },
          {
            question: "Can I store valuable items?",
            answer:
              "Yes, we provide climate-controlled units and advanced locking systems for valuables.",
          },
          {
            question: "What types of items can I store?",
            answer:
              "We store personal belongings, business inventory, documents, furniture, vehicles, and more.",
          },
          {
            question: "Is insurance available?",
            answer:
              "Optional insurance packages are available for added protection.",
          },
          {
            question: "How do I choose the right storage size?",
            answer:
              "Our Sharjah team helps determine the optimal unit size based on your inventory needs.",
          },
          {
            question: "What are the costs?",
            answer:
              "Pricing varies based on size and duration, with transparent policies and no hidden fees.",
          },
          {
            question: "How can I reserve a storage unit?",
            answer:
              "Contact us via website or phone, and our team will guide you through the quick reservation process.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Secure Your Perfect Space?"
        buttonText="Contact Us Now"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}