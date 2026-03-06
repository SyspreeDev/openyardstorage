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
  FiFileText,
  FiClock,
  FiDollarSign,
  FiShield
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function MarineLogisticsSharjah() {

  useMeta(
    "Leading Marine Logistics Companies Sharjah | OSS FZC",
    "OSS FZC delivers efficient, secure marine logistics companies in Sharjah, offering tailored solutions to streamline operations and enhance supply chain performance."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Navigating the Seas with Precision"
        title="One of the Premier Marine Logistics Companies in Sharjah – Elevate Your Supply Chain"
        subtitle="Partner with Us for Unmatched Efficiency in Marine Logistics. Contact Us Today!"
        buttonText="Contact Us"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Is Your Marine Logistics Partner Letting You Down?"
        title="Overcoming the Challenges of Marine Logistics in Sharjah"
        description="When it comes to marine logistics companies in Sharjah, the stakes are high. Businesses often face delays, mismanagement, and unexpected costs that can cripple operations."
        description2="At Open Yard Storage, we understand the intricacies of marine logistics in Sharjah and offer streamlined solutions tailored to your needs."
        rightTitle="Your Logistics Challenges, Our Solutions"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiFileText,
            title: "Navigating Regulations",
            text: "Simplifying complex compliance issues."
          },
          {
            icon: FiClock,
            title: "Managing Schedules",
            text: "Efficient scheduling to avoid costly delays."
          },
          {
            icon: FiDollarSign,
            title: "Optimizing Costs",
            text: "Innovative strategies for cost-effective logistics."
          },
          {
            icon: FiShield,
            title: "Ensuring Safety",
            text: "Robust systems to secure your cargo."
          }
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Transforming Marine Logistics in Sharjah"
        description="Our proprietary marine logistics framework integrates cutting-edge technology with expert personnel to deliver results that traditional logistics can’t match."
        features={[
          {
            image: "/icons/Real-time.png",
            title: "Seamless Integration",
            description: "Flawless coordination across all logistics processes."
          },
          {
            image: "/icons/custom.png",
            title: "Adaptive Solutions",
            description: "Customized strategies for every unique need."
          },
          {
            image: "/icons/support.png",
            title: "Real-time Tracking",
            description: "Stay informed with our state-of-the-art tracking system."
          },
          {
            image: "/icons/cost.png",
            title: "Cost Reduction",
            description: "Save big with tailored cost-cutting measures."
          }
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Marine Logistics Services"
        title="Comprehensive Marine Logistics Services"
        services={[
          {
            title: "Cargo Management",
            image: "/images/services/flexible-yard.jpg",
            description: "Robust management ensuring efficiency."
          },
          {
            title: "Custom Brokerage",
            image: "/images/services/custom-storage.jpg",
            description: "Expert handling of all documentation."
          },
          {
            title: "Freight Forwarding",
            image: "/images/services/security.jpg",
            description: "Seamless movement of goods without delays."
          },
          {
            title: "Warehousing Solutions",
            image: "/images/services/logistics.jpg",
            description: "Secure storage solutions tailored to your needs."
          },
          {
            title: "Distribution Services",
            image: "/images/services/maintenance.jpg",
            description: "End-to-end distribution with precision and care."
          }
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Quantifying Our Impact in Marine Logistics"
        stats={[
          { value: "30%", label: "Shipping Cost Reduction" },
          { value: "50%", label: "Faster Delivery Speeds" },
          { value: "24/7", label: "Logistics Monitoring" },
          { value: "500+", label: "Successful Shipments Managed" }
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Empowered by visionary leadership, we ensure excellence in marine logistics services for Sharjah and beyond."
          },
          {
            title: "Our Team",
            description:
              "Our dedicated team combines expertise with creativity to deliver marine logistics services with unparalleled precision."
          }
        ]}
      />

      {/* FAQ (FULL EXACT CONTENT FROM DOCUMENT) */}
      {/* FAQ */}
<FAQSection
  eyebrow="FAQ"
  title="Your Marine Logistics Questions Answered"
  faqs={[
    {
      question: "What are the benefits of using marine logistics services in Sharjah?",
      answer:
        "Marine logistics services in Sharjah offer numerous advantages, including strategic location, efficient port infrastructure, and access to a global network. Partnering with proficient marine logistics companies in Sharjah ensures seamless and cost-effective shipping solutions tailored to meet your specific needs. These services include freight forwarding, cargo management, and custom brokerage services which streamline operations and enhance supply chain efficiency. Sharjah's logistics companies are well-versed in handling the complexities of maritime regulations, ensuring compliance and safety. Opting for experienced marine logistics providers in Sharjah can significantly improve your business’s operational efficiency and market competitiveness."
    },
    {
      question: "How can Open Yard Storage improve my logistics operations?",
      answer:
        "Open Yard Storage elevates your logistics operations by offering tailored solutions that enhance efficiency and reduce costs. Our comprehensive suite of marine logistics services in Sharjah includes real-time tracking, ensuring that you are always informed about your cargo’s location. This transparency enables better planning and reduces uncertainty. Furthermore, our team of experts manages the intricacies of compliance with local and international shipping regulations, providing you with peace of mind. With a robust network and innovative strategies, we optimize routes and handling procedures to accelerate deliveries and minimize expenditures, thus maximizing your company's logistical performance."
    },
    {
      question: "What makes Sharjah a strategic location for marine logistics?",
      answer:
        "Sharjah’s strategic geographic position between major global trade routes makes it an ideal hub for marine logistics. The emirate boasts state-of-the-art port facilities and modern infrastructure that supports efficient cargo movement. Known for its cost-effective operations and rapid handling times, Sharjah enhances supply chain capabilities, reducing freight costs, and delivery times. Marine logistics companies in Sharjah have honed their expertise in navigating regional and international shipping lanes, providing a competitive advantage to businesses operating here. These factors collectively make Sharjah a pivotal center for logistics solutions in the Middle East and beyond."
    },
    {
      question: "What can I expect from Open Yard Storage's warehousing services?",
      answer:
        "Open Yard Storage provides top-tier warehousing solutions tailored to fit your logistical requirements. Our facilities in Sharjah are equipped with the latest technology to ensure the safety and security of your goods. We offer scalable storage solutions that can adapt to seasonal demand changes or business expansion. Real-time inventory management provides you with precise control and visibility over your stock, reducing errors and enhancing efficiency. With our strategic location, integrating warehousing services with freight and distribution becomes seamless, offering you a comprehensive logistics package designed to streamline your operations and reduce costs."
    },
    {
      question: "How can marine logistics services save my business money?",
      answer:
        "Engaging marine logistics services in Sharjah can lead to substantial cost savings for your business. Experienced marine logistics companies offer optimized shipping routes, bulk handling discounts, and efficient load management, all of which contribute to lower expenses. Additionally, experts handle regulatory compliance and documentation, minimizing costly errors and delays. By leveraging consolidated shipping, warehousing synergies, and enhanced supply chain coordination, businesses can significantly reduce their logistics overheads. Open Yard Storage’s advanced solutions minimize inefficiencies, providing cost-effective and timely delivery of goods, thereby improving your bottom line and competitive standing."
    },
    {
      question: "How does Open Yard Storage ensure the safety of my cargo?",
      answer:
        "Open Yard Storage prioritizes the safety of your cargo through comprehensive security measures and cutting-edge technology. Our facilities are equipped with advanced surveillance systems and monitoring tools to ensure constant oversight. We implement rigorous handling procedures and employ risk management strategies to tackle potential security threats effectively. Our personnel are trained to handle cargo with the utmost care, adhering to strict industry standards and guidelines. Partnering with us ensures that your shipments are not only secured during transit but also thoroughly protected throughout every step of the logistics process, delivering peace of mind."
    },
    {
      question: "What steps are involved in the freight forwarding process?",
      answer:
        "The freight forwarding process with Open Yard Storage in Sharjah involves several key steps. Initially, our experts assess your shipping requirements and develop the most efficient route and method. We coordinate the transportation of goods from the point of origin to our facilities or directly to the destination, managing all necessary logistical operations. Documentation and customs clearance are handled seamlessly by our experienced team, ensuring compliance with both local and international regulations. Throughout the process, our real-time tracking systems provide visibility and updates, ensuring you stay informed every step of the way, enhancing the efficiency of your supply chain."
    },
    {
      question: "Can Open Yard Storage help with customs and compliance?",
      answer:
        "Yes, Open Yard Storage is equipped to expertly manage all aspects of customs and compliance as part of our marine logistics services in Sharjah. Our dedicated team specializes in navigating complex regulatory environments, ensuring that all necessary documentation is accurately prepared and filed in a timely manner. We handle customs declarations, tariff classifications, and ensure adherence to all local and international trade regulations. Our expertise reduces the likelihood of costly delays and penalties, assisting you in maintaining smooth logistical operations. By partnering with us, you gain access to a wealth of knowledge that simplifies compliance."
    },
    {
      question: "What are the technological advancements used by Open Yard Storage in logistics?",
      answer:
        "Open Yard Storage leverages the latest technological advancements to streamline marine logistics operations in Sharjah. We implement state-of-the-art real-time tracking systems that provide unprecedented visibility of your goods at every stage of their journey. Our data analytics tools support precision planning and forecasting, enhancing decision-making agility. We also use automated processes for inventory management and warehouse operations, ensuring accuracy and efficiency. Advanced security systems keep cargo secure, while digital platforms simplify client interactions and order management. These technologies collectively enhance our service delivery, improving speed, reliability, and cost-effectiveness."
    },
    {
      question: "What kind of customer support does Open Yard Storage provide?",
      answer:
        "Open Yard Storage is committed to providing exceptional customer support as part of our marine logistics services in Sharjah. Our dedicated support team is available around the clock to address any inquiries or issues promptly. We pride ourselves on delivering personalized service tailored to meet your specific needs, with a focus on transparency and open communication. Whether it’s providing updates on your shipments or assisting with logistical challenges, our expert staff is ready to support you at every step. We are here to ensure that your experience with our marine logistics services remains seamless and successful."
    }
  ]}
/>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Marine Logistics Experience?"
        buttonText="Contact Us for Tailored Solutions Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}