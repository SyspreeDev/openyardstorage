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
  FiMapPin,
  FiShield,
  FiTrendingUp,
  FiHeadphones,
  FiAlertCircle,
  FiDollarSign,
  FiFileText,
} from "react-icons/fi";



export default function YardForRentInSharjah() {
  return (
    <>
      <InnerHero
       eyebrow="UNLOCK THE IDEAL YARD IN SHARJAH"
       subtitle="Secure your spot today for seamless operations in Sharjah’s thriving market."
        buttonText="Discover Our Journey"
        buttonLink="#story"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      title="Yard for Rent in Sharjah" /> 

      <TrustedSlider />

      <ChallengeSection
  title="Are you facing storage challenges in Sharjah?"
  subtitle="Overcome Common Yard Rental Issues with Ease"
  description="Finding the perfect yard for rent in Sharjah can be challenging, with limited availability, excessive costs, and insecure facilities. Despite flourishing business opportunities in Sharjah, many enterprises struggle with spaces that compromise efficiency and safety. Unpredictable terms and inadequate infrastructure only add to the woes, hindering growth and operational success."
  description2="Our solution addresses these pain points, providing secure, cost-effective, and flexible yard spaces designed for your needs. By choosing a dedicated yard rental in Sharjah, you ensure seamless operations and peace of mind, setting your business on a path to success."
  rightTitle="Transform Your Yard Rental Experience"
  rightBg="#EEE6FF"
  cards={[
    {
      icon: FiAlertCircle,
      title: "Availability Stress",
      text: "Immediate access to yard spaces without delays.",
    },
    {
      icon: FiDollarSign,
      title: "Cost Concerns",
      text: "Transparent pricing tailored to your budget.",
    },
    {
      icon: FiShield,
      title: "Security Risks",
      text: "Advanced security protecting your assets.",
    },
    {
      icon: FiFileText,
      title: "Rigid Terms",
      text: "Flexible options that adapt to your needs.",
    },
  ]}
/>
<FeatureSection
      title="Discover the OSS Advantage"
      description="At OSS, we redefine yard rentals by centering around your needs. Offering secure, affordable, and adaptable yard spaces, we empower businesses to optimize their operations. Our strategic locations in Sharjah ensure logistics are always streamlined. With cutting-edge security, flexible leasing terms, and a commitment to customer satisfaction, we transform challenges into opportunities."
      features={[
        {
          icon: <FiMapPin />,
          title: "Strategic Location",
          description: "Convenient access to major transport routes.",
        },
        {
          icon: <FiShield />,
          title: "Advanced Security",
          description: "24/7 surveillance and access control systems.",
        },
        {
          icon: <FiTrendingUp />,
          title: "Flexible Leasing",
          description: "Tailored terms that grow with your business.",
        },
        {
          icon: <FiHeadphones />,
          title: "Customer-Centric Support",
          description: "Dedicated teams ensuring seamless service.",
        },
      ]}
    />
      
      <ServiceGridSection
  eyebrow="Our Services"
  title="Comprehensive Yard Rental Services"
  columns={3}
  services={[
    {
      title: "Flexible Yard Rentals",
      image: "/images/services/flexible-yard.jpg",
    },
    {
      title: "Custom Storage Solutions",
      image: "/images/services/custom-storage.jpg",
    },
    {
      title: "Security Enhancements",
      image: "/images/services/security.jpg",
    },
    {
      title: "Logistical Support",
      image: "/images/services/logistics.jpg",
    },
    {
      title: "Facility Maintenance",
      image: "/images/services/maintenance.jpg",
    },
  ]}
/>
<StatsSection
  title="Proven Success in Numbers"
  subtitle="Join the Growing Number of Satisfied Clients"
  stats={[
    {
      value: "260+",
      label: "Sq Feet Capacity",
    },
    {
      value: "15+",
      label: "Years of Experience",
    },
    {
      value: "50+",
      label: "Global Partners",
    },
    {
      value: "98%",
      label: "On time delivery",
    },
  ]}
/>
<DualInfoSection
  items={[
    {
      title: "About Us",
      description:
        "Our leadership is committed to delivering unparalleled excellence in international shipping air services, prioritizing reliability and customer satisfaction.",
    },
    {
      title: "Our Team Section",
      description:
        "Our dedicated team excels in deploying creative solutions with precision in international air freight logistics.",
    },
  ]}
/>

<FAQSection
  eyebrow="FAQ"
  title="Your Yard Rental Questions Answered"
  faqs={[
    {
      question: "What is the typical size and cost of a yard for rent in Sharjah?",
      answer:
        "Yard sizes vary, providing flexibility for businesses of all scales. Our competitive pricing caters to diverse budgets, ensuring you find the right space at the right cost. Our experts assess your requirements to align your needs with the ideal yard space.",
    },
    {
      question: "How secure are the yards for rent in Sharjah?",
      answer:
        "Our yards are equipped with 24/7 surveillance, access control systems, and on-site security to ensure complete safety.",
    },
    {
      question: "Can I choose my lease duration for a yard rental in Sharjah?",
      answer:
        "Yes, we offer flexible leasing terms that can be customized to short-term or long-term requirements.",
    },
    {
      question: "Are the yard rentals accessible for large vehicles and equipment in Sharjah?",
      answer:
        "Absolutely. Our yards are designed to support heavy vehicles, machinery, and large equipment.",
    },
    {
      question: "What additional facilities come with the yard for rent in Sharjah?",
      answer:
        "Facilities may include lighting, drainage, power supply, maintenance support, and more based on the yard selected.",
    },
    {
      question: "How can renting a yard in Sharjah benefit my business operations?",
      answer:
        "It improves logistics efficiency, reduces overhead costs, and provides secure, scalable space for growth.",
    },
    {
      question: "What makes OSS yards different from other options in Sharjah?",
      answer:
        "OSS offers strategic locations, advanced security, flexible leasing, and customer-focused support.",
    },
    {
      question: "Will there be maintenance services included with my yard rental?",
      answer:
        "Yes, maintenance and operational support are included based on the agreement.",
    },
    {
      question: "How can I reserve a yard for rent in Sharjah through OSS?",
      answer:
        "You can contact us directly through our website or sales team to reserve your yard.",
    },
    {
      question: "Is customer support available for your yard rentals in Sharjah?",
      answer:
        "Yes, our dedicated support team is always available to assist you.",
    },
  ]}
/>
<CTASection
  title="Ready to Upgrade Your Yard Space?"
  buttonText="Contact Us Today to Reserve Your Yard in Sharjah"
  buttonLink="/contact-us"
  backgroundImage="/images/services/Explore-More.jpg"
/>
    </>

  );}



