import InnerHero from "../../components/InnerHero";

export default function VisionMission() {
  return (
    <>
      <InnerHero
       subtitle=""
        buttonText=""
        buttonLink="#story"
        backgroundImage="/images/contact/bg.png"
      title="Contact Us " /> 

      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">

    {/* LEFT – CONTACT FORM */}
    <div>
      <h3 className="text-2xl font-semibold mb-2">
        Send us your enquiry online
      </h3>
      <p className="text-gray-500 mb-8">
        We’d love to hear from you. Please fill out this form.
      </p>

      <form className="space-y-5">

        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone number</label>
          <input
            type="tel"
            placeholder="+971 50 000 0000"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Leave us a message..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
          ></textarea>
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-500">
          <input type="checkbox" />
          You agree to our privacy policy.
        </label>

        <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:to-red-700 text-white py-3 rounded-lg font-medium transition">
          Send Message
        </button>
      </form>
    </div>

    {/* RIGHT – LOCATION */}
    <div>
      <h3 className="text-xl font-semibold text-red-600 mb-1">Location</h3>
      <p className="text-gray-600 mb-4">
        Hamriyah Free Zone, Sharjah <br />
        P.O Box 42163
      </p>

      <div className="rounded-xl overflow-hidden shadow-lg mb-6">
        <iframe
          src="https://www.google.com/maps?q=Hamriyah%20Free%20Zone%20Sharjah&output=embed"
          className="w-full h-[280px] border-0"
          loading="lazy"
        ></iframe>
      </div>

      <div className="space-y-3 text-sm">
        <p>
          <span className="text-red-600 font-medium">Call us:</span><br />
          +971 50 9322 335
        </p>

        <p>
          <span className="text-red-600 font-medium">Email us:</span><br />
          sales@oss-me.com
        </p>
      </div>
    </div>

  </div>
</section>

      </>
  )
      }