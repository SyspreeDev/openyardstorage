import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-30 w-full">
    <div className="relative mx-auto flex max-w-[1400px] items-center px-6 py-4 text-white">


       <div className="flex items-center">
  <img
  src="/images/logo.png"
  alt="OSS Logistics"
  className="h-26 w-auto -mt-4 drop-shadow-sm"
/>

</div>


        {/* Desktop menu */}
       <nav className="mx-auto hidden md:flex items-center gap-10 text-[15px] font-medium text-white/90">

          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Industries we serve</a>
          <a href="#">Locations we serve</a>
          <a href="#">Projects</a>
          <a href="#">News</a>
          <a href="#">Contact</a>
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur">
          <nav className="flex flex-col gap-4 px-6 py-6 text-sm text-white">
            <a onClick={() => setOpen(false)} href="#">Home</a>
            <a onClick={() => setOpen(false)} href="#">About us</a>
            <a onClick={() => setOpen(false)} href="#">Services</a>
            <a onClick={() => setOpen(false)} href="#">Industries we serve</a>
            <a onClick={() => setOpen(false)} href="#">Locations we serve</a>
            <a onClick={() => setOpen(false)} href="#">Projects</a>
            <a onClick={() => setOpen(false)} href="#">News</a>
            <a onClick={() => setOpen(false)} href="#">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
