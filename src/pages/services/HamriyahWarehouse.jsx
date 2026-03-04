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
  FiDollarSign,
  FiGrid,
  FiClock,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function HamriyahWarehouse() {

  useMeta(
    "Hamriyah Free Zone Warehouse Rent Solutions | OSS FZC",
    "Explore premium warehouse rentals in Hamriyah Free Zone with OSS FZC. Flexible terms, strategic location, and reliable solutions to secure your ideal space today."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Transform Your Storage Needs with Seamless Solutions."
        title="Discover Premium Hamriyah Free Zone Warehouse Rent Options."
        subtitle="Secure Your Space Today – Contact Our Experts Now!"
        buttonText="Contact Our Experts"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Overcoming Storage Challenges, Together."
        title="Struggling with Finding Reliable Warehouse Space in Hamriyah Free Zone?"
        description="Navigating warehouse rental options in the Hamriyah Free Zone can feel overwhelming. Limited availability, soaring costs, and finding the right specifications to match your operations are daunting tasks."
        description2="At Open Yard Storage, we alleviate these pain points by offering straightforward, affordable, and customizable rental solutions tailored to your business needs."
        rightTitle="Simplifying Your Warehousing Woes."
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Availability Issues",
            text: "Struggling with finding the right space when you need it?",
          },
          {
            icon: FiDollarSign,
            title: "High Rental Costs",
            text: "Tired of spending too much on warehouse rent?",
          },
          {
            icon: FiGrid,
            title: "Space Optimization",
            text: "Is your current warehouse layout inefficient?",
          },
          {
            icon: FiMapPin,
            title: "Location Problems",
            text: "Need a strategically located space for better logistics?",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="Experience Tailored Solutions with Open Yard Storage."
        title="Unlock Seamless Storage Solutions."
        description="Open Yard Storage is committed to redefining your Hamriyah Free Zone warehouse rental experience. With strategic location advantages, customizable spaces, and competitive pricing, we simplify your logistics operations."
        features={[
          {
            image: "/icons/cost.png",
            title: "Flexible Terms",
            description: "Tailored lease terms to suit your timeline.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Strategic Location",
            description: "Proximity to key transportation hubs.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Competitive Pricing",
            description: "Get the best value for your rental investment.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Customizable Spaces",
            description: "Adapt the space according to your needs.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Solutions"
        title="Comprehensive Warehousing Solutions"
        services={[
          {
            title: "Short-term Rentals",
            image: "/images/services/flexible-yard.jpg",
            description: "Temporary solutions for urgent needs.",
          },
          {
            title: "Long-term Lease Options",
            image: "/images/services/custom-storage.jpg",
            description: "Secure your spot for uninterrupted operations.",
          },
          {
            title: "Temperature-Controlled Units",
            image: "/images/services/security.jpg",
            description: "Perfect for sensitive goods storage.",
          },
          {
            title: "Full-Service Management",
            image: "/images/services/logistics.jpg",
            description: "We handle the logistics, so you don't have to.",
          },
          {
            title: "24/7 Security",
            image: "/images/services/maintenance.jpg",
            description: "Ensure the safety of your inventory.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers."
        subtitle="Setting Standards in Warehouse Rental Excellence."
        stats={[
          { value: "30%", label: "Cost Reduction Achieved" },
          { value: "500+", label: "Warehousing Clients" },
          { value: "24/7", label: "Security & Access" },
          { value: "98%", label: "Client Satisfaction Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Our leadership team is dedicated to bringing excellence and innovation to the warehouse rental market.",
          },
          {
            title: "Our Team",
            description:
              "Our expert team combines creativity and precision to provide unmatched warehousing solutions.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
  eyebrow="FAQ"
  title="Your Warehouse Rental Questions Answered"
  faqs={[
    {
      question: "What makes Hamriyah Free Zone an ideal location for warehouse rental?",
      answer:
        "The Hamriyah Free Zone is strategically located in the UAE, offering excellent connectivity through air, sea, and road networks. This makes it a prime spot for businesses looking to enhance their logistics and distribution channels. Additionally, the zone offers tax exemptions and a business-friendly environment, adding to its appeal for entrepreneurs and established businesses alike. Renting a warehouse here can significantly improve your operational efficiency by reducing transportation time and cost.",
    },
    {
      question: "How does Open Yard Storage ensure competitive pricing for warehouse rentals in Hamriyah Free Zone?",
      answer:
        "We leverage our extensive network and market research to provide rental solutions that are both competitive and transparent. By understanding the dynamics of the Hamriyah Free Zone rental landscape, we secure spaces that maximize value for money, aligning cost with your budgetary needs without compromising on service quality.",
    },
    {
      question: "Can I customize the warehouse space according to my business needs?",
      answer:
        "Yes, at Open Yard Storage, we understand that every business has unique needs. Our spaces are flexible and can be tailored to your specific requirements, whether you need specialized shelving, temperature control, or unique layouts to optimize your operations. We'll work with you to ensure the space supports your business goals.",
    },
    {
      question: "What security measures are in place for warehouses in Hamriyah Free Zone?",
      answer:
        "Security is a top priority at Open Yard Storage. Our facilities are equipped with 24/7 surveillance, secure access control, and onsite security teams to ensure the safety of your goods. Additionally, our warehouses are regularly inspected to maintain safety standards, providing you peace of mind.",
    },
    {
      question: "Are there options for short-term warehouse rentals in Hamriyah Free Zone?",
      answer:
        "Absolutely, we offer flexible short-term rental options catering to businesses looking for temporary space solutions. Whether it's a seasonal need or a specific project, our short-term leases provide you with the flexibility to scale as required without long-term commitments.",
    },
    {
      question: "How can renting a warehouse in the Hamriyah Free Zone improve my logistics?",
      answer:
        "Renting a warehouse here can significantly streamline your supply chain due to its strategic location and excellent connectivity. With reduced transportation times and ease of access to major trade routes, your logistics operations become more efficient, reducing costs and delivery times.",
    },
    {
      question: "What are the lease terms offered by Open Yard Storage?",
      answer:
        "We provide flexible lease terms designed to accommodate both short-term and long-term business requirements. Our team will work with you to create a lease agreement that suits your operational timelines and financial plan, ensuring a hassle-free experience from start to finish.",
    },
    {
      question: "Do you offer any value-added services with warehouse rentals?",
      answer:
        "Yes, we offer a suite of value-added services such as inventory management, shipment processing, and logistics solutions. Our goal is to streamline your operations, so you can focus on what matters most – running your business efficiently.",
    },
    {
      question: "How quickly can I move into a warehouse in Hamriyah Free Zone?",
      answer:
        "Once all paperwork is finalized and a space is chosen, you can move in immediately. We understand that time is crucial for businesses, so we aim to make the transition as quick and seamless as possible, with support from our dedicated team.",
    },
    {
      question: "Why choose Open Yard Storage for my warehousing needs?",
      answer:
        "Open Yard Storage combines industry expertise with a customer-focused approach to deliver exceptional warehousing solutions. Our transparency, competitive pricing, and personalized service model ensure you receive the best possible experience in the Hamriyah Free Zone.",
    },
  ]}
/>

      {/* CTA */}
      <CTASection
        title="Ready to Optimize Your Storage Solutions?"
        buttonText="Get in Touch with Our Experts Today!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}