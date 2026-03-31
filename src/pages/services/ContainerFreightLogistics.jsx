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
  FiMap,
  FiPackage,
  FiSettings
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function ContainerFreightLogistics() {

  useMeta(
    "Efficient Container Freight Logistics | OSS FZC",
    "OSS FZC offers seamless container freight logistics with reliable, efficient cargo transport optimized for your business needs. Contact us today."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Reliable Freight, Seamless Solutions"
        title="Efficient Container Freight Logistics Tailored for You"
        subtitle="Streamline Your Operations – Get Your Free Consultation Today!"
        buttonText="Get Consultation"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="When Challenges Pile Up, We Clear the Path"
        title="Navigating the Complexities of Container Freight Logistics"
        description="In the ever-evolving world of Container Freight Logistics, complexities and inefficiencies can add unnecessary costs and delays."
        description2="Are you tired of dealing with unpredictable timelines, cargo handling errors, or poor communication from logistics providers? These issues not only hinder your business operations but also affect your bottom line. Open Yard Storage understands these challenges and offers optimized logistics solutions designed to overcome them."
        rightTitle="Overcome Logistic Hurdles with Us"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Precision Delivery",
            text: "Eliminating costly delays."
          },
          {
            icon: FiMap,
            title: "Advanced Tracking",
            text: "Transparency at every step."
          },
          {
            icon: FiPackage,
            title: "Expert Management",
            text: "Skilled handling of every shipment."
          },
          {
            icon: FiSettings,
            title: "Personalized Solutions",
            text: "Tailored strategies for unique needs."
          }
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Empower Your Freight with Innovative Solutions"
        description="At Open Yard Storage, our Container Freight Logistics services hinge on a proprietary framework that addresses the exact needs of modern businesses. Our unique approach integrates technology with hands-on expertise to streamline operation processes."
        features={[
          {
            image: "/icons/Real-time.png",
            title: "Innovative Technology",
            description: "Cutting-edge tools for better logistics."
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Tailored Strategies",
            description: "Solutions designed for your business."
          },
          {
            image: "/icons/cost.png",
            title: "Reliable Network",
            description: "Global access that guarantees reach."
          },
          {
            image: "/icons/support.png",
            title: "Dedicated Support",
            description: "24/7 logistics support team."
          }
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Freight Solutions"
        title="Comprehensive Freight Solutions to Elevate Your Business"
        services={[
          {
            title: "Global Freight Management",
            image: "/images/services/flexible-yard.jpg",
            description: "Ensuring seamless delivery across borders."
          },
          {
            title: "Customs Brokerage Services",
            image: "/images/services/custom-storage.jpg",
            description: "Simplifying international trade complexities."
          },
          {
            title: "Freight Consolidation",
            image: "/images/services/security.jpg",
            description: "Cost-effective transport solutions."
          },
          {
            title: "Real-Time Cargo Tracking",
            image: "/images/services/logistics.jpg",
            description: "Stay informed, every step of the way."
          },
          {
            title: "Dedicated Customer Support",
            image: "/images/services/maintenance.jpg",
            description: "Experience unparalleled service excellence."
          }
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Delivering Excellence Across the Globe"
        stats={[
          { value: "30%", label: "Improvement in Delivery Times" },
          { value: "25%", label: "Reduction in Logistics Costs" },
          { value: "24/7", label: "Customer Support" },
          { value: "Global", label: "Freight Network Coverage" }
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Led by seasoned experts, Open Yard Storage stands at the forefront of Container Freight Logistics, striving for unparalleled efficiency and precision."
          },
          {
            title: "Our Team",
            description:
              "Our dedicated team leverages their expertise in Container Freight Logistics to craft innovative solutions that meet every client's needs."
          }
        ]}
      />

      {/* FAQ */}
<FAQSection
  eyebrow="FAQ"
  title="Your Container Freight Logistics Questions Answered"
  faqs={[
    {
      question: "What is Container Freight Logistics?",
      answer:
        "Container Freight Logistics involves managing the transportation of goods in containers, optimizing for effective delivery. This includes strategic planning, cargo handling, and delivery scheduling to ensure secure and timely transit of goods, often across international boundaries. Open Yard Storage offers industry-leading Container Freight Logistics solutions that enhance supply chain efficiency."
    },
    {
      question: "How can Container Freight Logistics benefit my business?",
      answer:
        "Container Freight Logistics optimizes the shipping process, reducing transit time and costs. By utilizing these services, businesses can achieve greater efficiency, improve supply chain reliability, and adapt to market demands quicker by leveraging advanced tracking and expert freight management techniques offered by Open Yard Storage."
    },
    {
      question: "What kind of tracking options do you offer?",
      answer:
        "Our logistics services provide real-time tracking, allowing clients to monitor their shipment's journey. Using cutting-edge GPS technology, we ensure that you have full visibility and regular updates, thereby improving coordination and preparing for any unforeseen challenges."
    },
    {
      question: "Can Open Yard Storage handle international shipments?",
      answer:
        "Yes, we specialize in international Container Freight Logistics. Our extensive global network enables us to efficiently manage cross-border shipments, ensuring compliance with all relevant customs and regulatory requirements, thus offering smooth and secure international logistics."
    },
    {
      question: "How do you ensure timely delivery?",
      answer:
        "Timely delivery is ensured by our robust logistics framework which includes route optimization, predictive analysis, and expert operational support. We prioritize planning and proactive management to mitigate delays and ensure your freight arrives on schedule."
    },
    {
      question: "Do you offer customized logistics solutions?",
      answer:
        "Absolutely, our approach is tailored to meet specific business needs. We analyze each client's unique requirements and challenges to craft bespoke logistics plans, ensuring optimal efficiency and meeting all specific demands."
    },
    {
      question: "What industries can benefit from your services?",
      answer:
        "Our Container Freight Logistics solutions are adaptable across various industries including retail, manufacturing, and e-commerce. We tailor our services to align with industry-specific needs, ensuring maximum efficiency and satisfaction."
    },
    {
      question: "What sets Open Yard Storage apart in Container Freight Logistics?",
      answer:
        "Our distinctive combination of cutting-edge technology and personalized service makes us the preferred choice. We deliver reliable, efficient logistics solutions backed by a team of dedicated experts focused on client success."
    },
    {
      question: "How do you manage logistics challenges during peak seasons?",
      answer:
        "We plan meticulously, employing advanced forecasting techniques and scaling resources proactively during peak times to ensure uninterrupted service and timely deliveries, regardless of seasonal demand spikes."
    },
    {
      question: "What are the advantages of using freight consolidation services?",
      answer:
        "Freight consolidation combines multiple shipments into one, reducing shipping costs and improving transport efficiency. Our services optimize load management, increase shipment security, and enhance transit speed."
    }
  ]}
/>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Freight Logistics?"
        buttonText="Contact Us Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}