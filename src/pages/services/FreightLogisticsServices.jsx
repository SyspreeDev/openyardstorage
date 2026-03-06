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
  FiEye,
  FiSettings
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function FreightLogisticsServices() {

  useMeta(
    "Efficient Freight & Logistics Services | OSS FZC",
    "OSS FZC offers efficient freight and logistics services to optimize your supply chain, cut costs, ensure timely deliveries, and boost transparency for your business."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Seamless Freight Solutions to Propel Your Business Forward"
        title="Unlock Efficiency with Premier Freight & Logistics Services"
        subtitle="Discover how efficient logistics can transform your operations. Get a quote today!"
        buttonText="Get a Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Frustrated with Inefficient Logistics?"
        title="The Complexities of Freight & Logistics Services"
        description="Efficient freight and logistics services are the backbone of any successful business. However, many companies struggle with late deliveries, high shipping costs, and a lack of transparency in logistics processes."
        description2="At OpenYardStorage, we understand the intricacies of freight shipping. Our streamlined freight shipping service ensures timely and cost-effective delivery while providing you with complete visibility and control over your shipments."
        rightTitle="Say Goodbye to Common Logistics Challenges"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Delayed Deliveries",
            text: "End frustrating delays with timely freight solutions."
          },
          {
            icon: FiDollarSign,
            title: "Skyrocketing Costs",
            text: "Gain control over expenses with efficient shipping."
          },
          {
            icon: FiEye,
            title: "Lack of Transparency",
            text: "Experience clear and open communication every step of the way."
          },
          {
            icon: FiSettings,
            title: "Inefficient Processes",
            text: "Optimize operations with our state-of-the-art logistics framework."
          }
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Experience Unparalleled Freight Services"
        description="OSS FZC offers a unique, client-focused approach to freight & logistics services. Our systems are designed to deliver reliability and efficiency, leveraging cutting-edge technology to ensure your shipments are always on track."
        features={[
          {
            image: "/icons/Real-time.png",
            title: "Innovative Technology",
            description: "Employing the latest advancements for optimal efficiency."
          },
          {
            image: "/icons/custom.png",
            title: "Tailored Strategies",
            description: "Custom solutions designed to fit your unique business requirements."
          },
          {
            image: "/icons/support.png",
            title: "Dedicated Support",
            description: "Our expert team is always at your service for seamless interaction."
          },
          {
            image: "/icons/cost.png",
            title: "Transparent Operations",
            description: "We prioritize clear communication every step of the way."
          }
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Freight Services"
        title="Comprehensive Freight & Logistics Solutions"
        services={[
          {
            title: "Freight Shipping Service",
            image: "/images/services/flexible-yard.jpg",
            description: "Timely and reliable shipping services tailored to your needs."
          },
          {
            title: "Supply Chain Management",
            image: "/images/services/custom-storage.jpg",
            description: "End-to-end management for a smoother supply chain."
          },
          {
            title: "Customs Brokerage",
            image: "/images/services/security.jpg",
            description: "Simplifying complex customs processes with expert knowledge."
          },
          {
            title: "Fleet Management",
            image: "/images/services/logistics.jpg",
            description: "Optimize your fleet for maximum efficiency and cost savings."
          },
          {
            title: "Warehousing Solutions",
            image: "/images/services/maintenance.jpg",
            description: "Secure and flexible storage options customized for your business."
          }
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Empowering Businesses with Efficient Logistics"
        stats={[
          { value: "30%", label: "Faster Delivery Times" },
          { value: "25%", label: "Logistics Cost Reduction" },
          { value: "24/7", label: "Customer Support" },
          { value: "500+", label: "Successful Shipments Managed" }
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Our leadership team is dedicated to ensuring excellence, leveraging years of experience in freight and logistics services to drive your business forward."
          },
          {
            title: "Our Team",
            description:
              "Our team of logistics experts is committed to delivering innovative and precise solutions to meet all your freight shipping service needs."
          }
        ]}
      />

      {/* FAQ */}
      {/* FAQ */}
<FAQSection
  eyebrow="FAQ"
  title="Your Freight & Logistics Services Questions Answered"
  faqs={[
    {
      question: "What services does OpenYardStorage offer in freight logistics?",
      answer:
        "OpenYardStorage offers a comprehensive range of services, including freight shipping services, supply chain management, customs brokerage, fleet management, and warehousing solutions. Each service is tailored to meet your specific business needs, ensuring efficiency and reliability across your logistics operations."
    },
    {
      question: "How can I optimize my shipping costs with your services?",
      answer:
        "Our freight shipping services incorporate advanced technologies and customized strategies to ensure cost-effectiveness. By analyzing your logistics operations and streamlining processes, we help reduce unnecessary expenses and deliver the most efficient and affordable shipping solutions."
    },
    {
      question: "What makes OpenYardStorage different from other freight service providers?",
      answer:
        "OpenYardStorage stands out with its commitment to innovation, transparency, and customer-centric strategies. Our use of cutting-edge technology ensures that every shipment is managed with accuracy and precision, fostering trust through open communication and tailored logistics solutions."
    },
    {
      question: "How do you ensure timely delivery of freight?",
      answer:
        "Our logistics team employs state-of-the-art tracking systems and robust planning to guarantee on-time delivery. By prioritizing efficiency and meticulous scheduling, we overcome common logistics hurdles, ensuring your freight reaches its destination promptly."
    },
    {
      question: "Do you provide tracking for shipments?",
      answer:
        "Yes, OpenYardStorage provides comprehensive tracking for all shipments. Our real-time tracking systems offer you full visibility into your freight's status and location, ensuring transparency and peace of mind at every stage of the logistics journey."
    },
    {
      question: "Can I customize logistics solutions for my business?",
      answer:
        "Absolutely. We believe in offering solutions that align perfectly with your business objectives. Our team works closely with you to design tailored logistics strategies that address your unique requirements, maximizing efficiency and effectiveness."
    },
    {
      question: "What industries do you serve with your freight services?",
      answer:
        "OSS FZC caters to a wide range of industries including retail, manufacturing, technology, and more. Our adaptable freight solutions are designed to meet the diverse needs of different sectors, ensuring you receive optimal service regardless of your industry."
    },
    {
      question: "How can OSS FZC help streamline my supply chain?",
      answer:
        "Through our comprehensive supply chain management services, we enhance the efficiency of your logistics operations. We optimize processes, reduce bottlenecks, and implement strategies that streamline your entire supply chain, resulting in improved productivity and cost savings."
    },
    {
      question: "What kind of support can I expect from your team?",
      answer:
        "Our dedicated support team is always ready to assist you. Whether you need help with shipment tracking, customization of services, or resolving any concerns, our experts provide prompt and reliable support to ensure your logistics experience is smooth and seamless."
    },
    {
      question: "Why is transparency important in logistics services?",
      answer:
        "Transparency in logistics fosters trust and confidence. It enables businesses to make informed decisions, stay updated on shipment status, and effectively manage their operations. Our commitment to transparency ensures that you are always in the loop, minimizing uncertainties and enhancing partnership synergy."
    }
  ]}
/>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Logistics Experience?"
        buttonText="Contact Us Today for Tailored Freight Solutions"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}