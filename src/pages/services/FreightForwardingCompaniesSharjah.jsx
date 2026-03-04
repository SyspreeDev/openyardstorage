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
  FiDollarSign,
  FiFileText,
  FiMessageSquare
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function FreightForwardingCompaniesSharjah() {

  useMeta(
    "Expert Freight Forwarding Companies in Sharjah | OSS FZC",
    "OSS FZC provides reliable freight forwarding services in Sharjah with efficient logistics solutions designed to streamline your global supply chain."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Superior Freight Solutions Tailored for You"
        title="Elevate Your Logistics with Premier Freight Forwarding Companies in Sharjah"
        subtitle="Transform your shipping experience with seamless and efficient freight forwarding services."
        buttonText="Get Started Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Struggling with Inefficient Freight Management?"
        title="Discover the Challenges of Freight Forwarding in Sharjah"
        description="Freight forwarding can be complex in a global trade hub like Sharjah. Businesses often encounter delays, miscommunication, and unexpected logistics costs."
        description2="OSS FZC simplifies freight forwarding by combining advanced logistics planning, real-time tracking technology, and regulatory expertise to ensure smooth cargo movement."
        rightTitle="Overcoming Common Freight Challenges"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Unexpected Delays",
            text: "Reduce shipping delays with optimized logistics planning."
          },
          {
            icon: FiDollarSign,
            title: "Hidden Costs",
            text: "Transparent pricing structures to avoid unexpected fees."
          },
          {
            icon: FiFileText,
            title: "Complex Regulations",
            text: "Expert guidance navigating international trade rules."
          },
          {
            icon: FiMessageSquare,
            title: "Communication Gaps",
            text: "Real-time updates keep all stakeholders informed."
          }
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Unmatched Freight Solutions with Open Yard Storage"
        description="OSS FZC stands out among freight forwarding companies in Sharjah by combining advanced logistics technologies with personalized support. Our structured logistics framework ensures every shipment is planned, tracked, and delivered efficiently."
        features={[
          {
            image: "/icons/Real-time.png",
            title: "Advanced Tracking",
            description: "Real-time shipment visibility for full transparency."
          },
          {
            image: "/icons/cost.png",
            title: "Cost Efficiency",
            description: "Strategic planning reduces logistics expenses."
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Regulatory Expertise",
            description: "Navigate global trade regulations confidently."
          },
          {
            image: "/icons/support.png",
            title: "Customer-Centric Support",
            description: "Dedicated teams ensuring seamless coordination."
          }
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Freight Forwarding Services"
        title="Comprehensive Freight Solutions Tailored to Your Needs"
        services={[
          {
            title: "Customs Brokerage",
            image: "/images/services/security.jpg",
            description: "Expert handling of customs documentation and compliance."
          },
          {
            title: "Warehousing Services",
            image: "/images/services/custom-storage.jpg",
            description: "Secure and spacious storage for cargo management."
          },
          {
            title: "Air Freight",
            image: "/images/services/logistics.jpg",
            description: "Fast and reliable global air transport solutions."
          },
          {
            title: "Ocean Freight",
            image: "/images/services/flexible-yard.jpg",
            description: "Cost-effective shipping through international sea routes."
          },
          {
            title: "Land Transport",
            image: "/images/services/maintenance.jpg",
            description: "Integrated road transport for regional distribution."
          }
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Driving Impactful Logistics Results"
        stats={[
          { value: "30%", label: "Faster Shipping Times" },
          { value: "20%", label: "Reduced Logistics Costs" },
          { value: "24/7", label: "Shipment Monitoring" },
          { value: "500+", label: "Global Shipments Managed" }
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Our leadership drives excellence in freight forwarding in Sharjah by delivering innovative logistics strategies and reliable cargo solutions."
          },
          {
            title: "Our Team",
            description:
              "Our logistics professionals combine creativity, experience, and precision to deliver efficient freight forwarding services."
          }
        ]}
      />

      <FAQSection
  eyebrow="FAQ"
  title="Your Freight Forwarding Questions Answered"
  faqs={[
    {
      question: "What services do Freight Forwarding Companies in Sharjah offer?",
      answer:
        "Freight Forwarding Companies in Sharjah provide comprehensive logistics solutions, including customs brokerage, warehousing, and transportation services via air, sea, and land. They manage the complex processes involved in the import and export of goods, ensuring timely and cost-effective delivery while handling documentation, compliance, and shipment tracking. With expertise in local and international logistics, freight forwarders streamline operations and mitigate the challenges of global trade."
    },
    {
      question: "How does Open Yard Storage enhance the Freight Forwarding experience in Sharjah?",
      answer:
        "Open Yard Storage excels by offering a customer-centric approach with advanced technological solutions for real-time tracking and cost management. Specializing in regulatory expertise, we guide clients through intricate trade laws and ensure seamless communication at every step. Our holistic services are tailored to meet diverse business needs, providing flexibility and reliability that stand out among Freight Forwarding Companies in Sharjah."
    },
    {
      question: "Why is Sharjah a strategic location for freight forwarding?",
      answer:
        "Sharjah's strategic location between Europe and Asia, its access to major ports, and excellent infrastructure make it a key logistics hub. It offers a robust transport network for seamless connectivity across the Middle East, enhancing trade efficiency and lowering transit times. This advantageous positioning ensures that Freight Forwarding Companies in Sharjah can deliver optimized supply chain solutions, making it a preferred choice for businesses seeking reliable logistics partners."
    },
    {
      question: "What are the costs associated with freight forwarding in Sharjah?",
      answer:
        "Costs related to freight forwarding in Sharjah vary based on factors like shipment size, mode of transport, destination, and additional services required. Freight Forwarding Companies in Sharjah provide competitive quotes, ensuring transparency in fees associated with customs, storage, and handling. It's essential to choose a provider like Open Yard Storage that offers value by optimizing these costs through strategic planning and efficiency improvements."
    },
    {
      question: "How do freight forwarders handle customs clearance?",
      answer:
        "Freight forwarders navigate customs clearance by preparing necessary documents, calculating duties, and ensuring compliance with local regulations. With expertise in handling customs procedures, Freight Forwarding Companies in Sharjah, such as Open Yard Storage, efficiently manage this process, minimizing delays and avoiding potential fines. Their thorough understanding of international trade rules enables them to streamline customs and expedite shipments."
    },
    {
      question: "What steps do Freight Forwarding Companies take to ensure shipment safety?",
      answer:
        "To ensure shipment safety, Freight Forwarding Companies in Sharjah employ comprehensive strategies, including secure packaging, reputable carrier partnerships, and real-time tracking. Advanced risk management protocols and safety certifications further protect goods during transit. Open Yard Storage prioritizes shipment integrity by continuously monitoring and optimizing safety measures, ensuring your consignments are delivered intact and on time."
    },
    {
      question: "How can companies reduce freight forwarding costs?",
      answer:
        "Companies can reduce freight forwarding costs by optimizing shipping volumes, selecting the right mode of transport, and leveraging bulk shipment discounts. Collaborating with experienced Freight Forwarding Companies in Sharjah like Open Yard Storage ensures efficient route planning and customs management, minimizing unnecessary expenses. By implementing cost-effective logistics strategies, businesses can significantly improve their bottom line."
    },
    {
      question: "What role does technology play in modern freight forwarding?",
      answer:
        "Technology revolutionizes modern freight forwarding by enabling real-time shipment tracking, data analytics for performance assessment, and automated documentation processes. These technological advancements enhance operational efficiency, transparency, and communication. Freight Forwarding Companies in Sharjah are increasingly adopting smart technologies to provide clients with seamless logistics experiences, ensuring timely and reliable delivery."
    },
    {
      question: "How do Freight Forwarding Companies manage international trade regulations?",
      answer:
        "Freight Forwarding Companies in Sharjah expertly manage international trade regulations by staying informed about global compliance standards. They develop strategic partnerships with customs and follow trade norms closely. Open Yard Storage possesses extensive regulatory knowledge and offers tailored solutions to navigate complex international trade laws, ensuring hassle-free cross-border shipping for clients."
    },
    {
      question: "Why choose Open Yard Storage as your freight forwarding partner?",
      answer:
        "Open Yard Storage is a leading choice among Freight Forwarding Companies in Sharjah due to its commitment to excellence, innovative solutions, and a client-centric approach. With a strong network, robust technology, and deep regulatory expertise, we provide end-to-end logistics services tailored to meet your specific needs, ensuring your shipments are managed with precision and care."
    }
  ]}
/>
      {/* CTA */}
      <CTASection
        title="Ready to Optimize Your Supply Chain?"
        buttonText="Contact Us Today for Tailored Freight Solutions"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}