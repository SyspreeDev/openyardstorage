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
  FiPackage,
  FiClock,
  FiDollarSign,
  FiUsers
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function FreightForwardingManagement() {

  useMeta(
    "Efficient Freight Forwarding Management Services | OSS FZC",
    "Optimize your logistics with expert freight forwarding management. Discover seamless solutions to streamline your supply chain. Contact OSS FZC today."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Simplify Your Supply Chain"
        title="Experience Seamless Freight Forwarding Management with OSS FZC"
        subtitle="Ready to Transform Your Logistics? Schedule a Consultation Today!"
        buttonText="Get Consultation"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Navigating Challenges, Delivering Solutions"
        title="Frustrations of Freight Forwarding Management"
        description="Freight forwarding management can often feel like navigating a maze. Ever-changing regulations, coordination hiccups, and unexpected delays disrupt your operations and inflate costs."
        description2="OSS FZC is here to unravel these complexities. With intricate precision, we streamline processes, ensuring timely and cost-effective delivery of your goods."
        rightTitle="Solutions Tailored to Your Challenges"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiPackage,
            title: "Lost in Transition",
            text: "Struggling with complex customs and logistics?"
          },
          {
            icon: FiClock,
            title: "Unforeseen Delays",
            text: "Tired of unplanned interruptions impacting your schedule?"
          },
          {
            icon: FiDollarSign,
            title: "Cost Overruns",
            text: "Facing budget strains due to unexpected shipping costs?"
          },
          {
            icon: FiUsers,
            title: "Coordination Chaos",
            text: "Combating communication breakdowns?"
          }
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Seamless Success with Our Expertise"
        description="At OSS FZC, we redefine freight forwarding management. Our approach integrates cutting-edge technology and extensive industry expertise, ensuring a consistent and reliable flow of goods."
        features={[
          {
            image: "/icons/Real-time.png",
            title: "Innovative Tracking",
            description: "Real-time visibility for every shipment."
          },
          {
            image: "/icons/cost.png",
            title: "Cost Management",
            description: "Strategic planning to minimize expenses."
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Regulatory Compliance",
            description: "Ensuring adherence to all international rules."
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Dedicated Support",
            description: "24/7 commitment to your success."
          }
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Freight Services"
        title="Comprehensive Freight Management Services"
        services={[
          {
            title: "End-to-End Shipping Solutions",
            image: "/images/services/flexible-yard.jpg",
            description: "Managing your logistics from start to finish."
          },
          {
            title: "Real-Time Tracking",
            image: "/images/services/custom-storage.jpg",
            description: "Monitor your freight's journey live."
          },
          {
            title: "Regulatory Consultation",
            image: "/images/services/security.jpg",
            description: "Navigate intricate global trade laws effortlessly."
          },
          {
            title: "Cost Efficiency Strategies",
            image: "/images/services/logistics.jpg",
            description: "Reducing overheads while optimizing performance."
          },
          {
            title: "Customizable Solutions",
            image: "/images/services/maintenance.jpg",
            description: "Tailored services to fit your unique needs."
          }
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Data-Driven Excellence"
        stats={[
          { value: "30%", label: "Shipping Cost Reduction" },
          { value: "24/7", label: "Logistics Monitoring" },
          { value: "500+", label: "Successful Deliveries" },
          { value: "Global", label: "Freight Network Coverage" }
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "We lead the way in freight forwarding management, where innovation meets excellence, under the visionary guidance of our leadership."
          },
          {
            title: "Our Team",
            description:
              "Our expert team navigates logistics with creativity and precision, ensuring top-tier freight management solutions for every client."
          }
        ]}
      />

      {/* FAQ */}
<FAQSection
  eyebrow="FAQ"
  title="Your Freight Forwarding Management Questions Answered"
  faqs={[
    {
      question: "What is freight forwarding management?",
      answer:
        "Freight forwarding management involves the coordination and shipment of goods from one place to another through a single or series of carriers. It requires planning, skills in supply chain optimization, and understanding both logistics and international regulations. By entrusting this task to experts like OSS FZC, companies can focus on their core business, securing efficient and reliable delivery of products worldwide."
    },
    {
      question: "Why is freight forwarding management important?",
      answer:
        "Effective freight forwarding management is crucial as it ensures timely delivery, reduces risks, and optimizes costs. It involves navigating complex logistics networks, which can be overwhelming without professional help. With OSS FZC, businesses can be assured that their goods move safely and efficiently, minimizing delays and maximizing productivity."
    },
    {
      question: "How can effective freight forwarding management reduce costs?",
      answer:
        "By leveraging strategic planning and optimal routing, freight forwarding management reduces unnecessary expenses. It involves negotiating rates with carriers, consolidating shipments to take advantage of bulk rates, and implementing cost-saving technologies like real-time tracking. OSS FZC provides these services, cutting excessive costs and improving your bottom line."
    },
    {
      question: "What challenges can arise in freight forwarding management?",
      answer:
        "Key challenges include regulatory compliance, unexpected delays, cost overruns, and communication barriers. Ineffective management can lead to delayed shipments and increased costs. OSS FZC mitigates these risks by offering sophisticated solutions and comprehensive support, ensuring smooth and efficient operations."
    },
    {
      question: "How do freight forwarders handle unexpected delays?",
      answer:
        "Freight forwarders manage delays by adjusting plans rapidly, coordinating with a network of carriers to find alternative routes, and maintaining constant communication with clients. OSS FZC uses advanced software and strategic partnerships to navigate such hurdles, ensuring timely delivery and client satisfaction."
    },
    {
      question: "What is the role of technology in freight forwarding management?",
      answer:
        "Technology is central to modern freight forwarding, enhancing visibility, tracking, and efficiency. Systems like real-time tracking and automated notifications streamline the management process. At OSS FZC, we harness the latest technologies to optimize your supply chain's performance."
    },
    {
      question: "How does OSS FZC ensure regulatory compliance?",
      answer:
        "We maintain up-to-date knowledge of international trade laws and integrate compliance checks into our processes. This proactive approach minimizes risks and potential penalties, guaranteeing that your shipments meet all necessary legal requirements every step of the way."
    },
    {
      question: "Can freight forwarding services be customized?",
      answer:
        "Yes, freight forwarding services can be tailored to accommodate specific business needs regarding shipment size, destination, and urgency. OSS FZC prides itself on offering flexible solutions that match your unique requirements."
    },
    {
      question: "What industries benefit most from freight forwarding management?",
      answer:
        "Industries involved in manufacturing, retail, and e-commerce, as well as businesses dealing with international trade, benefit heavily from freight forwarding management. OSS FZC serves a diverse clientele, offering strategic solutions that drive efficiency and growth."
    },
    {
      question: "How can businesses pick the right freight forwarder?",
      answer:
        "Businesses should consider experience, network size, technology used, and client reviews when choosing a freight forwarder. OSS FZC’s proven track record and commitment to innovation make it an ideal partner for businesses seeking optimized freight forwarding management."
    }
  ]}
/>

      {/* CTA */}
      <CTASection
        title="Ready to Elevate Your Freight Management?"
        buttonText="Contact Us for Tailored Solutions Today!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}