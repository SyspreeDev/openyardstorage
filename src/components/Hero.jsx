import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/slider1.jpg",
    title: "How much oil and Gas has been found in 2020?",
  },
  {
    image: "/images/slider2.jpg",
    title: "Global energy logistics trends in focus",
  },
   {
    image: "/images/slider3.jpg",
    title: "Global energy logistics trends in focus",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 m-16">
        
        {/* LEFT TEXT */}
        <div className="max-w-xl text-white">
          <h1 className="text-[56px] leading-[1.1] font-bold">
            We Move <br /> What Matters.
          </h1>

          <p className="mt-5 max-w-md text-base text-gray-200">
            Agile logistics solutions built for scale, speed, and seamless
            delivery across the globe.
          </p>

          <button className="mt-8 rounded-md border border-white px-7 py-3 text-sm transition hover:bg-white hover:text-black">
            Let’s Move Together →
          </button>
        </div>

        {/* RIGHT SLIDER */}
<div className="relative ml-auto hidden lg:flex items-center mt-16">


  {/* LEFT ARROW */}
  <button
    onClick={() =>
      setActive((active - 1 + slides.length) % slides.length)
    }
    className="absolute -left-14 top-1/2 -translate-y-1/2 text-white text-4xl opacity-80 hover:opacity-100"
  >
    ‹
  </button>

  {/* CARD */}
  <div className="relative w-[380px] rounded-[28px] bg-white p-5 shadow-2xl">
    <img
      src={slides[active].image}
      alt=""
      className="h-[200px] w-full rounded-[22px] object-cover"
    />

    <p className="mt-4 text-sm font-medium text-gray-800">
      {slides[active].title}
    </p>

    {/* Progress */}
    <div className="mt-4 flex gap-2">
      {slides.map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-8 rounded-full ${
            i === active ? "bg-red-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>

    {/* RED CIRCLE ARROW (inside card) */}
    <button
      onClick={() => setActive((active + 1) % slides.length)}
      className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600"
    >
      ↗
    </button>
  </div>

  {/* RIGHT ARROW */}
  <button
    onClick={() => setActive((active + 1) % slides.length)}
    className="absolute -right-14 top-1/2 -translate-y-1/2 text-white text-4xl opacity-80 hover:opacity-100"
  >
    ›
  </button>
</div>


      </div>
    </section>
  );
}
