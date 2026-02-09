import InnerHero from "../../components/InnerHero";
import { motion } from "framer-motion";

export default function Inspiration() {
  return (
    <>
      <InnerHero
       subtitle="Your One-Stop Solution for Industrial Needs"
      
        backgroundImage="/images/Inspiration-bg.jpg"
      title="The Inspiration Behind OSS " /> 
       {/* page content */}

       <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT – IMAGE (slide from left) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-md"
        >
          <img
            src="/images/gap-market.jpg"
            alt="Logistics operations"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* RIGHT – CONTENT (slide from right) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-widest text-gray-400 uppercase">
              Our Story
            </span>
            <span className="h-[1px] w-16 bg-gray-300"></span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#2E2E2E]">
            <span className="block mb-4">
              The Gap in the Market
            </span>
            <span className="block text-red-600">
              Shaped Our Purpose
            </span>
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-600 mt-6 leading-relaxed">
            Before OSS, we worked closely with oil and gas companies, and we saw
            a recurring and frustrating pattern. Projects were often delayed
            not by technical failures, but by logistical paralysis.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Expensive equipment sat idle—not because it was broken, but because
            it was stuck at ports, stored in the wrong locations, or delayed by
            unclear customs procedures.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Companies had world-class engineers and groundbreaking ideas, yet
            their progress was held back by inefficiencies. They were losing
            the most valuable resource any project has:{" "}
            <strong>time</strong>.
          </p>
        </motion.div>

      </div>
    </section>
    <section className="bg-red-600 py-10">
  <div className="mx-auto max-w-[1000px] px-6 text-center text-white">

    {/* Small heading with lines */}
    <div className="flex items-center justify-center gap-4 mb-6">
      
      <p className="text-xs uppercase tracking-widest text-white/80">
        A Personal Revolution
      </p>
      <span className="w-16 h-px bg-white/40"></span>
    </div>

    {/* Main title */}
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      From Observation to Action
    </h2>

    {/* Description */}
    <p className="text-base md:text-lg leading-relaxed text-white/90">
      This wasn’t just a business observation; it was a personal revelation.
      We realized that these companies didn’t just need a storage space — they
      needed a partner who understood that storage was just one piece of a much
      larger puzzle. They needed someone who saw the entire chain and could take
      ownership of it.
    </p>

  </div>
</section>


<section className="py-24" style={{ backgroundColor: "#F8F9FB" }}>
  <div className="mx-auto max-w-[1400px] px-10">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT: IMAGE GRID */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-6"
      >
        {/* Large Image */}
        <div className="row-span-2 rounded-xl overflow-hidden">
          <img
            src="/images/logidtics-inspiration.jpg"
            alt="Logistics Inspiration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Small Image */}
        <div className="rounded-xl overflow-hidden">
          <img
            src="/images/cargo.jpg"
            alt="Cargo Operations"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Small Image */}
        <div className="rounded-xl overflow-hidden">
          <img
            src="/images/cargo2.jpg"
            alt="Container Yard"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* RIGHT: CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        {/* Quote */}
        <div className="flex gap-4 mb-6">
          <span className="w-[3px] bg-red-600"></span>
          <p className="italic font-medium text-gray-800">
            “The inspiration for OSS was born from a simple, powerful belief:
            <br />
            <span className="font-semibold">We can solve this.</span>”
          </p>
        </div>

        {/* Text */}
        <p className="text-gray-600 leading-relaxed mb-6">
          It was the drive to build a company that would act as a strategic ally,
          not just a vendor. We wanted to take the weight of logistical
          complexity off our clients’ shoulders.
        </p>

        <p className="text-gray-600 leading-relaxed">
          That initial spark fuels our mission today. We aren’t just moving
          cargo — we are enabling progress, one timely delivery at a time.
        </p>
      </motion.div>

    </div>
  </div>
</section>


    </>
  );
}
