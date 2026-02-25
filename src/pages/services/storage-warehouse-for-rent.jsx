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
  FiAlertCircle,
  FiShield,
  FiTrendingUp,
  FiDollarSign,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function StorageWarehouseForRent() {

  useMeta(
    "Top Storage Warehouse For Rent | OSS FZC",
    "Find tailored storage warehouse rentals with OSS FZC. Ideal for businesses and individuals needing secure, flexible, and efficient storage solutions in 2025."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Secure Your Assets with Ease"
        title="Top Storage Warehouse For Rent for Optimal Use"
        subtitle="Reserve Your Space Today and Enjoy Hassle-Free Storage Solutions!"
        buttonText="Contact Us Now"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Overcoming Storage Challenges has Never Been This Easy."
        title="Struggling with Limited Storage Solutions?"
        description="In today's fast-paced world, space is at a premium. Many businesses find themselves struggling with lack of space, inefficient storage, and security concerns. The demand for a dependable Storage Warehouse For Rent has never been higher. Companies need a solution that not only provides ample space but also offers flexibility and peace of mind."
        description2="Outsourcing storage isn't just about space; it's about finding a partner who understands your needs and offers practical, cost-effective solutions. At OSS FZC, we address these challenges head-on."
        rightTitle="End the Clutter Blues"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiAlertCircle,
            title: "Limited Space",
            text: "Limited space slowing down growth or operations.",
          },
          {
            icon: FiShield,
            title: "Security Woes",
            text: "Concerns over valuable assets' safety and security.",
          },
          {
            icon: FiTrendingUp,
            title: "Rigid Contracts",
            text: "Inflexible rental terms that don't adapt when your needs change.",
          },
          {
            icon: FiDollarSign,
            title: "Hidden Costs",
            text: "Unexpected fees that derail your budgeting.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="Experience Unmatched Storage Solutions with OSS FZC Products."
        title="A Seamless Storage Solution Tailored to You"
        description="At OSS FZC, we redefine the experience of renting a storage warehouse. Our facilities are designed with your convenience in mind, offering scalable and secure spaces that adapt as your needs evolve. With a transparent pricing model and flexible leasing terms, you'll have the peace of mind that you've chosen the best solution. Our facilities are monitored around-the-clock, ensuring complete security of your valuable goods."
        features={[
          {
            image: "/icons/cost.png",
            title: "Adaptable Spaces",
            description: "Scalable storage options to grow with you.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Top-Tier Security",
            description: "24/7 advanced monitoring and asset protection.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Flexible Contracts",
            description: "Tailored agreements that fit your changing needs.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Transparent Pricing",
            description: "No hidden fees – clear, straightforward costs.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Explore Our Comprehensive Storage Options"
        services={[
          {
            title: "Short-Term Rentals",
            image: "/images/services/flexible-yard.jpg",
            description: "Perfect for businesses needing quick, temporary storage.",
          },
          {
            title: "Long-Term Leases",
            image: "/images/services/custom-storage.jpg",
            description: "Secure a space to grow with your ongoing business requirements.",
          },
          {
            title: "Shared Spaces",
            image: "/images/services/security.jpg",
            description: "Economical options for smaller businesses.",
          },
          {
            title: "Temperature-Controlled Units",
            image: "/images/services/logistics.jpg",
            description: "Ideal for sensitive goods requiring specific environments.",
          },
          {
            title: "Customized Solutions",
            image: "/images/services/maintenance.jpg",
            description: "Tailored offers perfect for unique storage requirements.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Track record of success with clients achieving optimal storage solutions."
        stats={[
          { value: "500+", label: "Businesses Served" },
          { value: "24", label: "Security Monitoring" },
          { value: "100%", label: "Lease Options" },
          { value: "100%", label: "Transparent Pricing" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "At OSS FZC, our leadership ensures that every client receives unparalleled service in Storage Warehouse For Rent.",
          },
          {
            title: "Our Team",
            description:
              "Our expert team delivers storage solutions with unmatched creativity and precise execution.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Storage Warehouse For Rent Questions Answered"
        faqs={[
          {
            question: "What are the benefits of renting a storage warehouse?",
            answer:
              "Renting a storage warehouse offers significant advantages, including freeing up valuable office space, improving operational efficiency, and reducing clutter. It provides a secure environment for storing goods and allows businesses to scale storage needs as required.",
          },
          {
            question: "How secure are the storage facilities at OSS FZC?",
            answer:
              "We employ 24/7 surveillance, controlled access, and regular security audits to ensure your assets are protected around the clock.",
          },
          {
            question: "What lease options are available?",
            answer:
              "We offer flexible lease options ranging from short-term rentals to long-term leases with customizable contract terms.",
          },
          {
            question: "Are there any additional costs?",
            answer:
              "Our pricing model is transparent with no hidden fees. All costs are outlined upfront.",
          },
          {
            question: "Can storage space be customized?",
            answer:
              "Yes, we offer customizable solutions including racking, temperature control, and specialized access.",
          },
          {
            question: "Can I increase or decrease my storage space?",
            answer:
              "Yes, flexible lease terms allow you to adjust your storage space as needed.",
          },
          {
            question: "What items can be stored?",
            answer:
              "Our warehouses are suitable for office supplies, equipment, documents, inventory, and more.",
          },
          {
            question: "How accessible are the facilities?",
            answer:
              "Facilities include convenient loading/unloading areas for smooth logistics.",
          },
          {
            question: "Does OSS FZC offer storage insurance?",
            answer:
              "We recommend additional storage insurance and can guide you in obtaining coverage.",
          },
          {
            question: "Can OSS FZC help with moving goods?",
            answer:
              "Yes, we provide logistical support from pickup to drop-off for a smooth storage process.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Revolutionize Your Storage Needs?"
        buttonText="Secure Your Space with Us Today!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}