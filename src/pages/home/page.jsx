import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

import { blogs } from "../../data/blogs";

const projects = [
  {
    title: "Weatherford",
    subtitle: "Drilling International",
    image: "/images/project-1.jpg",
  },
  {
    title: "APACHE",
    subtitle: "",
    image: "/images/project-2.jpg",
  },
  {
    title: "TRINIDAD",
    subtitle: "DRILLING",
    image: "/images/project-3.jpg",
  },
  {
    title: "Halliburton",
    subtitle: "Energy Services",
    image: "/images/project-4.jpg",
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer secure open yard storage solutions for businesses that need outdoor space for equipment, vehicles, containers, machinery, and bulk materials.",
  },
  {
    question: "How do I book a shipment?",
    answer:
      "You can book a shipment by contacting our support team or by submitting a booking request through our website.",
  },
  {
    question: "What types of goods do you handle?",
    answer:
      "We handle a wide range of goods including industrial equipment, oil & gas materials, construction machinery, containers, and bulk cargo.",
  },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main>

      {/* WE PROVIDE LOGISTICS SOLUTIONS */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-10 lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/warehouse.png"
              alt="Warehouse"
              className="w-full rounded-lg object-cover"
            />

            <div className="absolute bottom-0 right-[-20px] bg-red-600 px-10 py-10 text-white shadow-lg">
              <p className="text-xs uppercase tracking-widest">
                Established since
              </p>
              <p className="mt-2 text-4xl font-bold">2006</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                What we do
              </p>
              <span className="h-px w-12 bg-gray-300"></span>
            </div>

            <h2 className="mt-3 text-5xl font-bold text-gray-900">
              We Provide <br />
              <span className="text-red-600">Logistics Solutions</span>
            </h2>

            <p className="mt-6 max-w-lg text-gray-600">
              At OSS, we are striving to redefine storage as a service by
              delivering a complete logistics solution to our customers.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <div className="text-3xl font-bold text-gray-900">
                260000<span className="text-red-600">+</span>
              </div>
              <span className="h-12 w-[2px] bg-gray-300"></span>
              <p className="text-sm text-gray-500">
                Sq Feet Capacity <br /> Facility in UAE
              </p>
            </div>

            <div className="mt-12 flex gap-6">
              <button className="rounded-md border px-10 py-4">
                A Little About Us
              </button>
              <button className="rounded-md bg-red-600 px-10 py-4 text-white">
                Connect With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="bg-white py-24 text-center">
        <div className="mx-auto max-w-[1400px] px-10">
          <div className="flex items-center justify-center gap-4">
            <span className="w-24 h-px bg-gray-300"></span>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Our Services
            </p>
            <span className="w-24 h-px bg-gray-300"></span>
          </div>

          <h2 className="mt-4 text-4xl font-bold">
            Enhancing Your Productivity, <br />
            <span className="text-red-600">Increasing Your Efficiency</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
            {[
              { title: "Ship Freight", image: "/images/ship-freight.jpg" },
              { title: "Air Freight", image: "/images/air-freight.png" },
              { title: "Land Transport", image: "/images/land-transport.png" },
              { title: "Open Yard Storage", image: "/images/openyardstorage.png" },
              { title: "Customs Clearance", image: "/images/custom.png" },
              { title: "Warehousing", image: "/images/wareh.jpg" },
            ].map((service, index) => (
              <div key={index} className="relative group">
                <div className="h-66 w-66 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition"
                  />
                 
                  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                    {service.title}
                    <FiArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1400px] px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-24 h-px bg-gray-300"></span>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Our Blogs
              </p>
              <span className="w-24 h-px bg-gray-300"></span>
            </div>

            <h2 className="text-4xl font-bold">
              Logistics News,<br />
              <span className="text-red-600">Trends & Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog) => {
              const date = new Date(blog.date);
              return (
                <a key={blog.id} href={`/blogs/${blog.slug}`} className="group">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-[260px] w-full object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute bottom-3 right-3 bg-white rounded-lg px-3 py-1 shadow">
                      <p className="text-sm font-semibold">
                        {date.getDate()}
                      </p>
                      <p className="text-[10px] text-gray-400 uppercase">
                        {date.toLocaleString("en-US", { month: "short" })}
                      </p>
                    </div>
                  </div>
                  <h3 className="mt-4 font-medium text-gray-700">
                    {blog.title}
                  </h3>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-24 h-px bg-gray-300"></span>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                FAQs
              </p>
              <span className="w-24 h-px bg-gray-300"></span>
            </div>

            <h2 className="text-4xl font-bold">
              Everything You <br />
              <span className="text-red-600">Need to Know</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div key={index} className="border-b pb-6">
                <button
                  onClick={() =>
                    setActiveIndex(index === activeIndex ? null : index)
                  }
                  className="flex w-full justify-between text-left"
                >
                  <span className="font-medium text-gray-700">
                    {item.question}
                  </span>
                  <span className="text-gray-400">
                    {activeIndex === index ? "▲" : "▼"}
                  </span>
                </button>

                {activeIndex === index && (
                  <p className="mt-4 text-sm text-gray-500">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="border border-red-600 px-6 py-2 text-red-600 rounded-md hover:bg-red-600 hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* LEFT: MAP */}
          <div className="w-full h-[450px] rounded-lg overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=India&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div>

            {/* Heading */}
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-16 h-px bg-gray-300"></span>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Contact Us
                </p>
                 <span className="w-16 h-px bg-gray-300"></span>
              </div>

              <h2 className="text-4xl font-bold text-gray-800">
                Have Questions?<br />
                <span className="text-red-600">Get in Touch!</span>
              </h2>
            </div>

            {/* Form */}
            <form className="space-y-8">

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-b border-gray-300 focus:border-red-600 outline-none pb-2"
                />

                <input
                  type="text"
                  placeholder="Number"
                  className="w-full border-b border-gray-300 focus:border-red-600 outline-none pb-2"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full border-b border-gray-300 focus:border-red-600 outline-none pb-2"
                />

                <input
                  type="text"
                  placeholder="Company"
                  className="w-full border-b border-gray-300 focus:border-red-600 outline-none pb-2"
                />
              </div>

              {/* Message */}
              <textarea
                rows="3"
                placeholder="Message"
                className="w-full border-b border-gray-300 focus:border-red-600 outline-none pb-2 resize-none"
              />

              {/* Button */}
              <button
                type="submit"
                className="mt-6 bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
    <section className="bg-white py-24">
  <div className="mx-auto max-w-[1400px] px-10">

    <div
      className="relative h-[300px] rounded-xl overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/Explore-More.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Grow With the Flow
        </h2>

        <button className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition">
          Connect With Us
          <span>→</span>
        </button>
      </div>
    </div>

  </div>
</section>


    </main>
  );
}
