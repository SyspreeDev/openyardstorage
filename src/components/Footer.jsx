import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white">

      {/* TOP FOOTER */}
      <div className="mx-auto max-w-[1400px] px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* ABOUT */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/footer-logo.png" alt="OSS Logo" className="h-16" />
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Specialized in Yard Storage, Warehousing, Distribution,
              Break-Bulk, Rig movements, Heavy equipment transportation &
              Customs clearance in Sharjah, Dubai and other parts of emirates.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-red-100 text-red-600
                               flex items-center justify-center
                               hover:bg-red-600 hover:text-white transition"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-red-600 font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-red-600">Home</a></li>
              <li><a href="#" className="hover:text-red-600">About</a></li>
              <li><a href="#" className="hover:text-red-600">FAQ</a></li>
              <li><a href="#" className="hover:text-red-600">Services</a></li>
              <li><a href="#" className="hover:text-red-600">Contact</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-red-600 font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li>Air Freight</li>
              <li>Sea Freight</li>
              <li>Land Transport</li>
              <li>Warehousing</li>
              <li>Custom clearance</li>
            </ul>
          </div>

          {/* LOCATION */}
          <div>
            <h4 className="text-red-600 font-semibold mb-6">Location</h4>

            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Hamriyah Free Zone, Sharjah<br />
              P.O Box 42163
            </p>

            <p className="text-sm mb-2">
              <span className="text-red-600">Call us:</span><br />
              <span className="text-gray-500">+971 50 9322 335</span>
            </p>

            <p className="text-sm">
              <span className="text-red-600">Email us:</span><br />
              <a
                href="mailto:sales@oss-me.com"
                className="text-gray-500 hover:text-red-600"
              >
                sales@oss-me.com
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-red-600 py-4 text-center">
        <p className="text-white text-sm">
          © 2025 . OSS . All Rights Reserved
        </p>
      </div>

    </footer>
  );
}
