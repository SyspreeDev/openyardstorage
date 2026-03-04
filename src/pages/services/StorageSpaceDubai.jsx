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
  FiShield,
  FiClock,
  FiBox
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function StorageSpaceDubai() {

  useMeta(
    "Secure Storage Space for Rent in Dubai | OSS FZC",
    "OSS FZC offers flexible, secure storage spaces in Dubai, tailored to your needs. Rent reliable storage solutions today."
  );

  return (
    <>

      {/* HERO */}
      <InnerHero
        eyebrow="Maximizing Your Space Needs in Dubai"
        title="Discover Premier Storage Spaces for Rent in Dubai"
        subtitle="Start Your Storage Journey with Us Today!"
        buttonText="Contact Us Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Struggling with Limited Space? We Feel You."
        title="The Storage Dilemma: More Clutter, Less Space"
        description="Many businesses and individuals in Dubai struggle with limited storage space. Whether managing business inventory or personal belongings, finding reliable storage can feel overwhelming."
        description2="Concerns about security, accessibility, and cost make the decision even more challenging. OSS FZC provides secure and flexible storage solutions designed to remove these challenges and give you peace of mind."
        rightTitle="From Challenges to Seamless Solutions"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiDollarSign,
            title: "Expensive Storage Costs",
            text: "High storage fees are a common concern when renting space in Dubai."
          },
          {
            icon: FiShield,
            title: "Security Worries",
            text: "Many storage providers fail to guarantee full protection."
          },
          {
            icon: FiClock,
            title: "Limited Access Hours",
            text: "Restricted access makes storage inconvenient."
          },
          {
            icon: FiBox,
            title: "Insufficient Space Options",
            text: "Finding the right storage size is often difficult."
          }
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Why Choose Open Yard Storage?"
        description="At Open Yard Storage, we provide more than just storage space. Our facilities combine advanced security, flexible rental plans, and accessible locations to create a reliable storage solution for businesses and individuals."
        features={[
          {
            image: "/icons/cost.png",
            title: "Secure Access",
            description: "Advanced security systems protect your belongings."
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Flexible Space",
            description: "Custom storage options designed around your needs."
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Affordable Rates",
            description: "Transparent pricing with no hidden charges."
          },
          {
            image: "/icons/Real-time.png",
            title: "24/7 Accessibility",
            description: "Access your storage unit anytime you need."
          }
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Our Comprehensive Storage Solutions"
        services={[
          {
            title: "Short-Term Storage",
            image: "/images/services/flexible-yard.jpg",
            description: "Ideal for temporary storage without long-term commitments."
          },
          {
            title: "Long-Term Storage",
            image: "/images/services/custom-storage.jpg",
            description: "Affordable options for extended storage periods."
          },
          {
            title: "Commercial Storage",
            image: "/images/services/security.jpg",
            description: "Flexible storage designed for business inventory."
          },
          {
            title: "Residential Storage",
            image: "/images/services/logistics.jpg",
            description: "Secure solutions for personal belongings."
          },
          {
            title: "Climate-Controlled Units",
            image: "/images/services/maintenance.jpg",
            description: "Protect sensitive items with controlled environments."
          }
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Numbers That Demonstrate Our Commitment"
        stats={[
          { value: "30%", label: "Efficiency Improvement" },
          { value: "500+", label: "Satisfied Clients" },
          { value: "24/7", label: "Secure Monitoring" },
          { value: "99%", label: "Customer Satisfaction" }
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Our leadership ensures Open Yard Storage consistently delivers innovative and trusted storage solutions in Dubai."
          },
          {
            title: "Our Team",
            description:
              "Our expert team combines creativity and precision to deliver reliable storage services tailored to your needs."
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Storage Space Questions Answered"
        faqs={[
          {
            question: "What types of storage spaces are available for rent in Dubai?",
            answer:
              "We offer short-term, long-term, commercial, residential, and climate-controlled storage spaces to suit a wide range of needs."
          },
          {
            question: "How secure are the storage spaces?",
            answer:
              "Our facilities include 24/7 surveillance, controlled access points, and secure fencing."
          },
          {
            question: "Can I access my storage anytime?",
            answer:
              "Yes. Our facilities allow 24/7 access to your storage unit."
          },
          {
            question: "How much does storage cost in Dubai?",
            answer:
              "Pricing depends on the storage size and duration. We offer transparent pricing with no hidden fees."
          },
          {
            question: "Are there size limitations for stored items?",
            answer:
              "We provide storage units in various sizes, suitable for small items to full inventories."
          },
          {
            question: "Is insurance available?",
            answer:
              "Yes, insurance options are available to protect stored items."
          },
          {
            question: "What are climate-controlled units?",
            answer:
              "They maintain stable temperature and humidity levels to protect sensitive items."
          },
          {
            question: "How do I rent storage space?",
            answer:
              "Simply contact our team, choose a unit, and complete the rental agreement."
          },
          {
            question: "What makes Open Yard Storage different?",
            answer:
              "We offer flexible plans, secure facilities, and personalized customer service."
          },
          {
            question: "What should I look for in a storage provider?",
            answer:
              "Security, accessibility, transparent pricing, and customer support are key factors."
          }
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Secure Your Space?"
        buttonText="Contact Us for a Tailored Storage Solution Today!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

    </>
  );
}