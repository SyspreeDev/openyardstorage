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
  FiShield,
  FiDollarSign,
  FiClock
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function StorageWarehouseDubai() {

  useMeta(
    "Premier Storage Warehouse in Dubai | OSS FZC",
    "Explore secure, spacious storage warehouse solutions in Dubai with OSS FZC. Tailored, reliable services designed to fit your needs. Contact us today!"
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Your Trusted Partner in Dubai Storage Solutions"
        title="Premium Storage Warehouse Dubai Services that Exceed Expectations"
        subtitle="Start Your Storage Journey with Us - Contact Today!"
        buttonText="Contact Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Navigating Dubai's Storage Challenges"
        title="Struggling to Find Secure Storage in Dubai?"
        description="In a bustling city like Dubai, finding reliable and secure storage warehouse solutions can be a daunting task. Businesses often grapple with inadequate space, security concerns, and logistical nightmares."
        description2="OSS FZC provides dependable storage solutions that integrate seamlessly into your operations, ensuring asset protection and operational efficiency."
        rightTitle="Overcome Your Storage Challenges"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiBox,
            title: "Lack of Space",
            text: "Struggling with overcrowded facilities?"
          },
          {
            icon: FiShield,
            title: "Security Concerns",
            text: "Worried about asset safety?"
          },
          {
            icon: FiDollarSign,
            title: "High Costs",
            text: "Watching your budget go sky-high?"
          },
          {
            icon: FiClock,
            title: "Poor Accessibility",
            text: "Frustrated by inconvenient storage access?"
          }
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Experience Superior Storage Solutions"
        description="OSS FZC offers unmatched security and efficiency with strategically located facilities across Dubai. Our advanced infrastructure ensures safe, flexible, and cost-effective storage."
        features={[
          {
            image: "/icons/cost.png",
            title: "Strategic Locations",
            description: "Accessible storage in prime Dubai locations."
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Advanced Security",
            description: "Cutting-edge technology protects your assets."
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Flexible Options",
            description: "Tailor-made storage solutions for businesses."
          },
          {
            image: "/icons/Real-time.png",
            title: "Cost-Effective",
            description: "Save money without compromising quality."
          }
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Exceptional Storage Solutions Await You"
        services={[
          {
            title: "Customizable Storage Solutions",
            image: "/images/services/flexible-yard.jpg",
            description: "Tailored storage to meet diverse business needs."
          },
          {
            title: "24/7 Secure Access",
            image: "/images/services/custom-storage.jpg",
            description: "Round-the-clock access for convenience."
          },
          {
            title: "Temperature Controlled Storage",
            image: "/images/services/security.jpg",
            description: "Ideal for sensitive goods and products."
          },
          {
            title: "Short & Long-term Lease Options",
            image: "/images/services/logistics.jpg",
            description: "Flexible leasing plans to suit your business."
          },
          {
            title: "Logistical Support",
            image: "/images/services/maintenance.jpg",
            description: "Smooth storage and retrieval management."
          }
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proud of Our Proven Track Record"
        subtitle="Numbers That Reflect Our Excellence"
        stats={[
          { value: "30%", label: "Operational Efficiency Boost" },
          { value: "500+", label: "Businesses Served" },
          { value: "24/7", label: "Security & Access" },
          { value: "99%", label: "Client Satisfaction" }
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "At OSS FZC, our leadership's visionary approach has been central to our growth and success in Dubai's storage industry."
          },
          {
            title: "Our Team",
            description:
              "Our experienced team delivers creative, precise storage solutions designed around your business needs."
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Storage Warehouse Dubai Questions Answered"
        faqs={[
          {
            question: "What makes OSS FZC unique among warehouse providers in Dubai?",
            answer:
              "OSS FZC stands out due to its strategic locations across Dubai, advanced security systems, flexible storage options, and dedicated customer support."
          },
          {
            question: "Can OSS FZC facilities accommodate sensitive goods?",
            answer:
              "Yes, our warehouses include temperature-controlled environments for sensitive items like pharmaceuticals or electronics."
          },
          {
            question: "How secure are the storage facilities?",
            answer:
              "Our facilities include 24-hour surveillance, gated access, and onsite personnel ensuring top-tier asset protection."
          },
          {
            question: "Are flexible leasing options available?",
            answer:
              "Yes, we offer both short-term and long-term leasing options tailored to business needs."
          },
          {
            question: "Do you support logistics operations?",
            answer:
              "Yes, we provide inventory coordination and logistical support for smooth storage and retrieval."
          },
          {
            question: "Where are OSS FZC storage facilities located?",
            answer:
              "Our facilities are strategically located across major Dubai commercial and industrial zones."
          },
          {
            question: "Which businesses benefit most from your storage services?",
            answer:
              "Retail, logistics, e-commerce, manufacturing, and pharmaceutical businesses benefit greatly from our storage services."
          },
          {
            question: "How do you preserve stored assets?",
            answer:
              "We implement climate control, humidity management, and protective packaging to preserve asset quality."
          },
          {
            question: "Can I access my items anytime?",
            answer:
              "Yes, we provide 24/7 secure access to your stored goods."
          },
          {
            question: "What customer support does OSS FZC offer?",
            answer:
              "Our team provides dedicated support including consultation, logistics assistance, and prompt issue resolution."
          }
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Elevate Your Storage Solutions?"
        buttonText="Get in Touch with OSS FZC Today!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}