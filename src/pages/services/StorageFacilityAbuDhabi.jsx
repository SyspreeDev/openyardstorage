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
  FiBox,
  FiDollarSign,
  FiShield,
  FiClock
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function StorageFacilityAbuDhabi() {

  useMeta(
    "Premier Storage Facility In Abu Dhabi | Secure & Reliable Solutions",
    "Discover top-tier storage solutions at our cutting-edge Storage Facility in Abu Dhabi. Trusted by leading clients for security, flexibility, and unmatched service."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Secure. Accessible. Reliable."
        title="Discover Premium Storage Solutions in Abu Dhabi"
        subtitle="Unlock peace of mind. Contact us for a personalized storage solution today."
        buttonText="Contact Us Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Facing Steep Challenges with Your Storage Needs?"
        title="Don't Let Storage Hurdles Hold You Back"
        description="Many businesses face challenges when searching for reliable storage facilities in Abu Dhabi. Limited space, high costs, and inadequate security can create operational inefficiencies."
        description2="At Open Yard Storage, we offer modern storage facilities with advanced security, flexible access, and scalable solutions designed to eliminate these challenges."
        rightTitle="Solutions Tailored to Your Needs"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiBox,
            title: "Space Woes Solved",
            text: "Ample storage to overcome space limitations."
          },
          {
            icon: FiDollarSign,
            title: "Cost-Effective Solutions",
            text: "Affordable pricing that maximizes value."
          },
          {
            icon: FiShield,
            title: "Top-Notch Security",
            text: "Advanced systems ensure full protection."
          },
          {
            icon: FiClock,
            title: "Flexible Accessibility",
            text: "Convenient access tailored to your schedule."
          }
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Experience the OSS FZC Advantage"
        description="At Open Yard Storage, we combine modern facilities with exceptional customer service to deliver reliable storage solutions in Abu Dhabi. Our infrastructure ensures security, flexibility, and operational efficiency."
        features={[
          {
            image: "/icons/cost.png",
            title: "State-of-the-Art Facilities",
            description: "Modern infrastructure designed for security."
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Tailored Flexibility",
            description: "Storage plans customized to your needs."
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Customer Support",
            description: "Dedicated team ready to assist you."
          },
          {
            image: "/icons/Real-time.png",
            title: "Advanced Security",
            description: "Comprehensive monitoring and access control."
          }
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Explore Our Comprehensive Storage Solutions"
        services={[
          {
            title: "Personal Storage",
            image: "/images/services/flexible-yard.jpg",
            description: "Secure units for personal belongings."
          },
          {
            title: "Business Storage",
            image: "/images/services/custom-storage.jpg",
            description: "Efficient storage solutions for businesses."
          },
          {
            title: "Vehicle Storage",
            image: "/images/services/security.jpg",
            description: "Safe storage for cars and vehicles."
          },
          {
            title: "Climate-Controlled Units",
            image: "/images/services/logistics.jpg",
            description: "Ideal for temperature-sensitive items."
          },
          {
            title: "Document Storage",
            image: "/images/services/maintenance.jpg",
            description: "Secure storage for important records."
          }
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="A Testament to Our Excellence"
        stats={[
          { value: "30%", label: "Operational Cost Reduction" },
          { value: "500+", label: "Clients Served" },
          { value: "24/7", label: "Security Monitoring" },
          { value: "99%", label: "Customer Satisfaction" }
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Open Yard Storage leads with innovation, delivering advanced storage solutions tailored to business and personal needs."
          },
          {
            title: "Our Team",
            description:
              "Our experienced team delivers reliable and innovative storage services across Abu Dhabi."
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Storage Facility In Abu Dhabi Questions Answered"
        faqs={[
          {
            question: "What types of storage solutions do you offer?",
            answer: "We offer personal storage, business storage, vehicle storage, document storage, and climate-controlled units."
          },
          {
            question: "How secure is your storage facility?",
            answer: "Our facility includes 24/7 surveillance, controlled access, and modern security infrastructure."
          },
          {
            question: "Are climate-controlled units available?",
            answer: "Yes, we provide climate-controlled storage for sensitive items such as electronics and documents."
          },
          {
            question: "Can I access my belongings anytime?",
            answer: "We offer flexible access hours allowing you to retrieve items conveniently."
          },
          {
            question: "What is the minimum rental period?",
            answer: "The minimum rental period is typically 30 days with flexible options available."
          },
          {
            question: "Is vehicle storage available?",
            answer: "Yes, we provide secure storage spaces for vehicles."
          },
          {
            question: "Do you provide moving or packing services?",
            answer: "Yes, our team can assist with packing and moving services."
          },
          {
            question: "How do I reserve a storage unit?",
            answer: "Contact us online or by phone and our team will help you choose the best unit."
          },
          {
            question: "Are there restrictions on stored items?",
            answer: "Hazardous materials, explosives, and illegal items are prohibited."
          },
          {
            question: "What fire safety systems are installed?",
            answer: "Our facility includes smoke detectors, sprinklers, and advanced fire safety systems."
          }
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Storage Experience?"
        buttonText="Contact Us for a Customized Storage Solution"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}