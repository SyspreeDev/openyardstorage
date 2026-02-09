import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-30 w-full">
      <div className="relative mx-auto flex max-w-[1400px] items-center px-6 py-4 text-white">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="OSS Logistics"
              className="h-26 w-auto -mt-4 drop-shadow-sm"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="mx-auto hidden md:flex items-center gap-10 text-[15px] font-medium text-white/90">

          <Link to="/">Home</Link>

          {/* ABOUT US DROPDOWN */}
          <div className="relative group">
            <button className="flex items-center gap-1">
              About us
              <span className="text-xs">▾</span>
            </button>

            <div
              className="absolute left-0 top-full mt-3 w-64 
                         bg-white text-gray-800 rounded-lg shadow-lg
                         opacity-0 invisible group-hover:opacity-100 
                         group-hover:visible transition-all"
            >
              <Link
                to="/about/our-story"
                className="block px-5 py-3 hover:bg-gray-100"
              >
                Our Story
              </Link>

              <Link
                to="/about/founder"
                className="block px-5 py-3 hover:bg-gray-100"
              >
                Founders
              </Link>

              <Link
                to="/about/vision-mission"
                className="block px-5 py-3 hover:bg-gray-100"
              >
                Vision / Mission / Values
              </Link>

              <Link
                to="/about/inspiration"
                className="block px-5 py-3 hover:bg-gray-100"
              >
                Inspiration Behind Starting the Company
              </Link>
            </div>
          </div>

          <Link to="/services">Services</Link>
          <Link to="/industries">Industries we serve</Link>
          <Link to="/locations">Locations we serve</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur">
          <nav className="flex flex-col gap-4 px-6 py-6 text-sm text-white">

            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            {/* MOBILE ABOUT DROPDOWN */}
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex justify-between items-center"
            >
              About us
              <span>{aboutOpen ? "▲" : "▼"}</span>
            </button>

            {aboutOpen && (
              <div className="ml-4 flex flex-col gap-3 text-white/80">
                <Link
                  to="/about/our-story"
                  onClick={() => setOpen(false)}
                >
                  Our Story
                </Link>

                <Link
                  to="/about/founder"
                  onClick={() => setOpen(false)}
                >
                  Founders
                </Link>

                <Link
                  to="/about/vision-mission"
                  onClick={() => setOpen(false)}
                >
                  Vision / Mission / Values
                </Link>

                <Link
                  to="/about/inspiration"
                  onClick={() => setOpen(false)}
                >
                  Inspiration Behind Starting the Company
                </Link>
              </div>
            )}

            <Link to="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link to="/industries" onClick={() => setOpen(false)}>
              Industries we serve
            </Link>
            <Link to="/locations" onClick={() => setOpen(false)}>
              Locations we serve
            </Link>
            <Link to="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link to="/news" onClick={() => setOpen(false)}>
              News
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}
