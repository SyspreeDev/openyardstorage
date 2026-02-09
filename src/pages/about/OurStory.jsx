import InnerHero from "../../components/InnerHero";

export default function OurStory() {
  return (
    <>
      <InnerHero
       subtitle="Your One-Stop Solution for Industrial Needs"
        buttonText="Discover Our Journey"
        buttonLink="#story"
        backgroundImage="/images/ship-sailing-sea-against-sky.jpg"
      title="The OSS Story: From Storage to Strategic Logistics Partnership." /> 
       

      <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/images/founder.jpg"  // replace with your image path
            alt="Founder"
            className="w-full max-w-md rounded-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <div className="flex items-center gap-4">
            <span className="text-sm tracking-widest text-gray-400 uppercase">
              Our Origins
            </span>
            <span className="h-[1px] w-16 bg-gray-300"></span>
          </div>


          <h2 className="text-4xl font-bold mt-3">
            Founder’s <span className="text-red-600">Message</span>
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            In 2006, we founded OSS with a clear goal: to provide reliable open
            land storage, primarily supporting oil and gas companies with their
            long-term needs. It was a solid business, but we knew we were
            capable of more. We were a facility, not yet a partner.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Driven to grow, we began engaging our customers to become more
            involved in their core projects. The path wasn't immediate. Our
            inexperience was a barrier, but it became a starting line. We
            embraced a new personal motto: <strong>“LEARNING EVERY DAY.”</strong>
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            We dove headfirst into the intricacies of operations. Through
            relentless hard work, we earned new opportunities and navigated
            complex hurdles with airlines, shipping lines, and customs. Each
            challenge forged our expertise and transformed us into a
            comprehensive logistics partner.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 transition">
              A Little About Us →
            </button>

            <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
              Connect With Us →
            </button>
          </div>
        </div>

      </div>
    </section>
     <section className="w-full bg-[#fafafa] py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>
          {/* Small heading with line */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-widest text-gray-400 uppercase">
              Growth & Evolution
            </span>
            <span className="h-[1px] w-16 bg-gray-300"></span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Expanding Our Services,
            <br />
            <span className="text-red-600">
              Deepening Our Partnership
            </span>
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-600 mt-6 leading-relaxed max-w-xl">
            To serve more customers, we kept adding storage spaces. But our
            vision grew. We slowly stepped into full logistics services,
            offering door-to-door shipments that involved collection from
            origin, transport to ports, customs formalities, and delivery to
            our secure OSS facility.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed max-w-xl">
            But we didn’t stop there. We listened to our clients’ broader needs
            and began helping them procure parts for their machinery, handle
            surplus equipment sales, and connect them with the right
            mechanical and engineering service providers.
          </p>

          {/* Stats */}
          <div className="flex gap-12 mt-10">
            <div>
              <h3 className="text-4xl font-bold text-red-600">15+</h3>
              <p className="text-sm text-gray-500 mt-1">
                Years of service
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-red-600">260k+</h3>
              <p className="text-sm text-gray-500 mt-1">
                Sq feet capacity
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/images/warehouse.jpg" // replace with your image
            alt="Warehouse operations"
            className="w-full max-w-lg object-cover rounded-md"
          />
        </div>

      </div>
    </section>
    <section className="w-full bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 leading-tight">
          Our Mission:{" "}
          <span className="text-red-600">Your Industrial</span>
          <br />
          <span className="text-red-600">Ecosystem</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-8 leading-relaxed">
          This evolution has crystallized into our core mission: to be the
          one-stop solution for your industrial needs. We envision a
          partnership where you can use our facility not just for storing,
          but for repairing, maintaining, and even as a showroom to conduct
          trade.
        </p>

        <p className="text-gray-600 mt-6 leading-relaxed">
          We are building more than a storage yard; we are building an
          industrial ecosystem. And in the future, we plan to evolve this
          into a full marketplace, connecting every part of the industrial
          supply chain.
        </p>

      </div>
    </section>
    <section className="w-full bg-[#fafafa] py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/images/team-warehouse.jpg" // replace image path
            alt="Our team culture"
            className="w-full max-w-lg object-cover rounded-md"
          />
        </div>

        {/* Right Content */}
        <div>
          {/* Small heading with line */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-widest text-gray-400 uppercase">
              Growth & Evolution
            </span>
            <span className="h-[1px] w-16 bg-gray-300"></span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            The Culture That
            <br />
            <span className="text-red-600">Drives Us</span>
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-600 mt-6 leading-relaxed max-w-xl">
            This journey of growth is the heartbeat of our company. We train
            every team member with one non-negotiable mission:
            <strong> “VALUE FOR TIME.”</strong> We take on every job with
            confidence and deliver it promptly. We've also learned that a
            careless “YES” is dangerous; we prioritize truly understanding
            the scope to commit with certainty.
          </p>

          {/* Highlighted Promise */}
          <p className="mt-6 leading-relaxed max-w-xl font-semibold text-gray-800">
            <span className="text-red-600 font-bold">Our core promise is TIME.</span>{" "}
            You need to trust us to make your project happen. This is why we
            believe it's not your project, it's our project to complete and
            achieve together.
          </p>

          {/* Closing Line */}
          <p className="text-gray-600 mt-6 leading-relaxed max-w-xl">
            We are OSS. We are your partners in progress, safeguarding your
            timeline and building solutions for your future.
          </p>
        </div>

      </div>
    </section>
    
     <section className="relative w-full h-[420px]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/grow-with-flow.jpg')", // replace image
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6">
          Grow With the Flow
        </h2>

        <button className="flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-md text-sm font-semibold hover:bg-red-700 transition">
          Connect With Us
          <span className="text-lg">→</span>
        </button>
      </div>

    </section>
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-start">

        {/* Left Map */}
        <div className="w-full h-[520px] rounded-md overflow-hidden">
            <div className="w-full h-[520px] rounded-md overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57644.219902197685!2d55.553548!3d25.446161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f9dca6b63c8b%3A0x8c8e7c80f486f275!2sOSS%20FZC%20-%20Logistics!5e0!3m2!1sen!2sin!4v1770355968475!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="OSS Location Map"
  ></iframe>
</div>

                    </div>

        {/* Right Form */}
        <div>
          {/* Small heading */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-widest text-gray-400 uppercase">
              Contact Us
            </span>
            <span className="h-[1px] w-16 bg-gray-300"></span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Have Questions?
            <br />
            <span className="text-red-600">Get in Touch!</span>
          </h2>

          {/* Form */}
          <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

            <input
              type="text"
              placeholder="Name"
              className="border-b border-gray-300 py-2 outline-none focus:border-red-600"
            />

            <input
              type="text"
              placeholder="Number"
              className="border-b border-gray-300 py-2 outline-none focus:border-red-600"
            />

            <input
              type="email"
              placeholder="E-mail"
              className="border-b border-gray-300 py-2 outline-none focus:border-red-600"
            />

            <input
              type="text"
              placeholder="Company"
              className="border-b border-gray-300 py-2 outline-none focus:border-red-600"
            />

            <textarea
              placeholder="Message"
              rows="3"
              className="md:col-span-2 border-b border-gray-300 py-2 outline-none resize-none focus:border-red-600"
            ></textarea>

            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-4 rounded-md text-sm font-semibold hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>

      {/* page content */}
    </>
  );
}
