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
  FiDollarSign,
  FiRefreshCw,
  FiTool,
  FiShield,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function SmallStorageWarehouse() {

  useMeta(
    "Small Storage Warehouse For Rent - Flexible, Secure Solutions | OSS FZC",
    "Discover affordable and flexible small storage warehouse rental options at OSS FZC. Secure your space today and simplify your business storage needs!"
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Unlock Your Space Potential Today."
        title="Flexible & Secure Small Storage Warehouse For Rent."
        subtitle="Get Your Quote Now & Transform Your Storage Needs!"
        buttonText="Get Your Quote Now"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Overwhelmed by Inefficient Storage?"
        title="Are Your Storage Solutions Letting You Down?"
        description="Finding a suitable small storage warehouse for rent can be daunting, with many businesses facing challenges like exorbitant costs, inflexible lease terms, and poorly maintained facilities."
        description2="Often, these frustrations lead to wasted time and money while limiting business growth."
        rightTitle="We Address Your Storage Challenges"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiDollarSign,
            title: "High Costs",
            text: "Avoid unnecessary expenses with our affordable solutions.",
          },
          {
            icon: FiRefreshCw,
            title: "Inflexible Leases",
            text: "Benefit from adaptable terms that grow with your business.",
          },
          {
            icon: FiTool,
            title: "Poor Maintenance",
            text: "Experience modern, well-kept facilities.",
          },
          {
            icon: FiShield,
            title: "Security Concerns",
            text: "Enjoy peace of mind with robust security measures.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="Discover the OSS FZC Advantage"
        title="Experience Tailored Storage Solutions"
        description="At OSS FZC, we redefine how businesses approach storage with flexible rentals, scalable spaces, and state-of-the-art facilities."
        features={[
          {
            image: "/icons/cost.png",
            title: "Comprehensive Security",
            description: "Advanced tech for top-tier protection.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Scalable Spaces",
            description: "Adjust your space without hassle.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Client-Oriented",
            description: "Personalized service every step of the way.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Cost-Efficient",
            description: "Competitive pricing with no hidden fees.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Storage Solutions"
        title="Explore Our Storage Solutions"
        services={[
          {
            title: "Short-Term Rentals",
            image: "/images/services/flexible-yard.jpg",
            description: "Ideal for seasonal inventory.",
          },
          {
            title: "Long-Term Agreements",
            image: "/images/services/custom-storage.jpg",
            description: "Secure your space for ongoing needs.",
          },
          {
            title: "Custom Storage Design",
            image: "/images/services/security.jpg",
            description: "Tailored layouts for unique requirements.",
          },
          {
            title: "Off-Site Transport",
            image: "/images/services/logistics.jpg",
            description: "Efficient transportation for your goods.",
          },
          {
            title: "24/7 Access",
            image: "/images/services/maintenance.jpg",
            description: "Unrestricted access to your storage space.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Join Our Growing Community of Satisfied Clients"
        stats={[
          { value: "30%", label: "Average Cost Savings" },
          { value: "500+", label: "Businesses Served" },
          { value: "24/7", label: "Secure Access" },
          { value: "99%", label: "Client Satisfaction Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Leadership at OpenYardStorage is dedicated to delivering excellence and ensuring every client’s storage needs are met with efficiency and care.",
          },
          {
            title: "Our Team",
            description:
              "Our skilled professionals blend expertise and creativity to craft storage solutions that ensure optimal functionality.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Small Storage Warehouse Questions Answered"
        faqs={[
          {
            question: "What are the benefits of renting a small storage warehouse?",
            answer:
              "Renting offers flexibility, scalability, cost control, and security without the burden of property ownership.",
          },
          {
            question: "How do I choose the right size?",
            answer:
              "Assess inventory volume, stock rotation frequency, and growth plans to select the ideal space.",
          },
          {
            question: "Is security included?",
            answer:
              "Yes, facilities include surveillance systems, controlled access, and regular monitoring.",
          },
          {
            question: "Is 24/7 access available?",
            answer:
              "Yes, you can access your stored goods anytime.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Elevate Your Storage Solutions?"
        buttonText="Contact Us Today to Get Started!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}