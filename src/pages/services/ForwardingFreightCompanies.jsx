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
  FiClock,
  FiMessageSquare,
  FiDollarSign,
  FiUsers
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function ForwardingFreightCompanies() {

  useMeta(
    "Forwarding Freight Companies | OSS FZC",
    "OSS FZC delivers seamless freight forwarding management with efficient and reliable logistics solutions tailored to your business supply chain."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Streamlining Success in Forwarding Freight Companies"
        title="Maximize Efficiency with Leading Freight Forwarding Management"
        subtitle="Transform your logistics today – Contact us for a consultation."
        buttonText="Get Consultation"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Facing Freight Management Challenges?"
        title="Overcome Common Hurdles in Freight Forwarding"
        description="Managing logistics within forwarding freight companies can be complex. Delays, miscommunication, and rising operational costs can slow down shipments and impact efficiency."
        description2="OSS FZC simplifies logistics management with structured processes and smart coordination tools that ensure timely deliveries and seamless supply chain management."
        rightTitle="Solutions at Your Fingertips"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Delayed Shipments",
            text: "Rapid response protocols minimize transit delays."
          },
          {
            icon: FiMessageSquare,
            title: "Communication Gaps",
            text: "Advanced communication systems keep stakeholders informed."
          },
          {
            icon: FiDollarSign,
            title: "Cost Overruns",
            text: "Optimized logistics strategies reduce unnecessary costs."
          },
          {
            icon: FiUsers,
            title: "Stakeholder Coordination",
            text: "Integrated systems unify supply chain participants."
          }
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Advantage"
        title="Transforming Freight Forwarding with Expert Precision"
        description="At OSS FZC, freight forwarding management goes beyond simple transportation. Our expert team integrates technology, strategy, and industry expertise to create predictable, efficient, and cost-effective supply chain operations."
        features={[
          {
            image: "/icons/Real-time.png",
            title: "Integrated Technology",
            description: "Real-time shipment tracking ensures transparency."
          },
          {
            image: "/icons/custom.png",
            title: "Custom Solutions",
            description: "Logistics strategies designed for your business."
          },
          {
            image: "/icons/cost.png",
            title: "Cost Efficiency",
            description: "Optimize operations and maximize ROI."
          },
          {
            image: "/icons/support.png",
            title: "Expert Collaboration",
            description: "Partner-driven logistics solutions."
          }
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Freight Forwarding Services"
        title="Discover Our Comprehensive Freight Forwarding Solutions"
        services={[
          {
            title: "Full Container Load Services",
            image: "/images/services/flexible-yard.jpg",
            description: "Efficient handling of large shipment consignments."
          },
          {
            title: "Less than Container Load",
            image: "/images/services/custom-storage.jpg",
            description: "Flexible solutions for smaller shipments."
          },
          {
            title: "Customs Brokerage",
            image: "/images/services/security.jpg",
            description: "Expert customs compliance and documentation."
          },
          {
            title: "Global Freight Solutions",
            image: "/images/services/logistics.jpg",
            description: "Worldwide logistics network with local expertise."
          },
          {
            title: "Supply Chain Consultation",
            image: "/images/services/maintenance.jpg",
            description: "Strategic advice to optimize logistics operations."
          }
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Demonstrating Our Impact in Freight Forwarding"
        stats={[
          { value: "30%", label: "Transit Time Reduction" },
          { value: "25%", label: "Logistics Cost Savings" },
          { value: "24/7", label: "Tracking & Support" },
          { value: "500+", label: "Successful Shipments Managed" }
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Our leadership team is dedicated to delivering excellence in freight forwarding management, helping businesses achieve seamless logistics operations."
          },
          {
            title: "Our Team",
            description:
              "Our logistics specialists bring years of expertise and innovation to provide precise and reliable freight forwarding solutions."
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Freight Forwarding Questions Answered"
        faqs={[
          {
            question: "What is freight forwarding management?",
            answer:
              "Freight forwarding management coordinates shipments, documentation, customs clearance, and transportation using air, sea, and road carriers."
          },
          {
            question: "Why should I use a freight forwarding company?",
            answer:
              "Freight forwarders simplify logistics by handling documentation, customs, and shipment coordination."
          },
          {
            question: "How can freight forwarding improve business efficiency?",
            answer:
              "Professional freight forwarding reduces delays, lowers costs, and improves delivery reliability."
          },
          {
            question: "What makes OSS FZC a trusted freight forwarding partner?",
            answer:
              "OSS FZC offers technology-driven logistics, experienced teams, and customized supply chain strategies."
          },
          {
            question: "Do freight forwarders handle customs clearance?",
            answer:
              "Yes, freight forwarders manage documentation, duties, and compliance to ensure smooth customs clearance."
          },
          {
            question: "How does technology help freight forwarding?",
            answer:
              "Technology enables real-time tracking, improved communication, and efficient shipment management."
          },
          {
            question: "How can shipping costs be optimized?",
            answer:
              "By using strategic route planning, carrier partnerships, and efficient logistics systems."
          },
          {
            question: "Why is communication important in freight forwarding?",
            answer:
              "Clear communication ensures all stakeholders remain informed and shipments remain on schedule."
          },
          {
            question: "How do freight forwarders handle unexpected delays?",
            answer:
              "They use monitoring systems and contingency planning to quickly resolve disruptions."
          },
          {
            question: "How can I start freight forwarding services with OSS FZC?",
            answer:
              "Simply contact our logistics experts to discuss your requirements and design a customized logistics solution."
          }
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Logistics?"
        buttonText="Get in Touch with Our Experts Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}