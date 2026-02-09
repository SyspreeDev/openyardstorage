import InnerHero from "../../components/InnerHero";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Value for Time",
    desc:
      "This is our core promise. We understand that time is your most critical asset. We protect it through meticulous planning, proactive communication, and a relentless focus on deadlines. Your timeline is our timeline.",
    icon: "/icons/time.png",
  },
  {
    title: "Ownership & Partnership",
    desc:
      "It's not your project, it's our project. We don't just execute tasks; we take ownership of the outcome. We are invested in your success from start to finish, acting as a true extension of your team.",
    icon: "/icons/hand.png",
  },
  {
    title: "Clarity & Commitment",
    desc:
      "A careless 'YES' is dangerous. We believe in honest and transparent communication. We take the time to fully understand the scope and challenges before we commit, ensuring that when we say 'yes,' we have a definitive plan to deliver.",
    icon: "/icons/clarity.png",
  },
  {
    title: "Relentless Learning",
    desc:
      "Born from our founder's journey, we embrace the mindset of 'Learning Every Day.' The industrial and logistics landscape is always changing, and so are we. We continuously adapt, innovate, and deepen our expertise to serve you better.",
    icon: "/icons/learning.png",
  },
  {
    title: "Teamwork Wins",
    desc:
      "We overcome complex challenges through collaboration. We leverage the diverse strengths of our team, fostering an environment of mutual support where we unite to find the best solution for our clients.",
    icon: "/icons/teamwork.png",
  },
];

export default function VisionMission() {
  return (
    <>
      <InnerHero
       subtitle="The Principles That Drive Us Forward"
        buttonText="Discover Our Journey"
        buttonLink="#story"
        backgroundImage="/images/vision-bg.jpg"
      title="Our Mission, Vision & Values " /> 

      <section className="w-full bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-700 mb-6">
          A Strategic Partner in progress
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          At OSS, we are more than a logistics and storage company; we are your
          strategic partner in progress. Our foundation is built on a clear
          purpose, an ambitious vision for the future, and a set of core values
          that guide every decision we make.
        </p>

        </div>
     </section>

     <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT – CONTENT */}
        <div>
          {/* Small label */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-widest text-gray-400 uppercase">
              Our Mission (Our “Why”)
            </span>
            <span className="h-[1px] w-16 bg-gray-300"></span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] leading-tight">
            <span className="block mb-4">
              Trusted Solutions For
            </span>

            <span className="block text-red-600">
              Industrial Needs
            </span>
          </h2>


          {/* Description */}
          <p className="text-gray-600 mt-6 leading-relaxed">
            To be the trusted, one-stop solution for our clients' industrial
            needs, delivering unparalleled value through an unwavering
            commitment to time, partnership, and relentless problem-solving.
          </p>

          {/* Sub-heading */}
          <h4 className="mt-8 font-semibold text-gray-800">
            What this means for you ?
          </h4>

          {/* Extra text */}
          <p className="text-gray-600 mt-4 leading-relaxed">
            We take on your operational challenges as our own. From storage
            and logistics to procurement and surplus sales, we provide
            integrated solutions that save you time, reduce complexity, and
            drive your project forward. When you partner with us, you gain a
            team dedicated to making your success our shared achievement.
          </p>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="overflow-hidden rounded-md">
          <img
            src="/images/mission.jpg" // replace if needed
            alt="Industrial logistics"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
    
    <section className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT – IMAGE */}
        <div className="overflow-hidden rounded-md">
          <img
            src="/images/vision-ecosystem.jpg" // replace if needed
            alt="Industrial ecosystem"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          {/* Small label */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-widest text-gray-400 uppercase">
              Our Vision (Our “Where”)
            </span>
            <span className="h-[1px] w-16 bg-gray-300"></span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#2E2E2E]">
            <span className="block mb-4">
              Creating a Dynamic
            </span>
            <span className="block text-red-600">
              Industrial Ecosystem
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-6 leading-relaxed">
            To create the region's most dynamic industrial ecosystem—a connected
            marketplace where businesses can store, maintain, trade, and thrive
            seamlessly.
          </p>

          {/* Sub-heading */}
          <h4 className="mt-8 font-semibold text-gray-800">
            What this means for you ?
          </h4>

          {/* Extra content */}
          <p className="text-gray-600 mt-4 leading-relaxed">
            We are building more than a company; we are building a platform for
            your growth. Our future is a comprehensive hub where you can not
            only store equipment but also repair it, source parts, find new
            buyers, and connect with vetted service providers—all in one trusted
            environment.
          </p>
        </div>

      </div>
    </section>

    <section className="w-full bg-[#F8F9FB] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-6 mb-6">
            <span className="h-[1px] w-12 bg-gray-300"></span>
            <span className="text-sm tracking-widest text-gray-400 uppercase">
              Our Values (Our "How")
            </span>
            <span className="h-[1px] w-12 bg-gray-300"></span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-6">
            The Principle we live by
          </h2>

          <p className="text-gray-600">
            These are the non-negotiable principles that every member of the
            OSS team lives by.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-6">

                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="font-semibold text-lg text-[#2E2E2E] mb-4">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
      <section className="relative w-full h-[320px] lg:h-[380px]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cta-about.jpg')", // change if needed
        }}
      />


      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
          Grow With the Flow
        </h2>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-md font-medium hover:bg-red-700 transition"
        >
          Connect With Us →
        </Link>

      </div>
    </section>
    </>
  );
}