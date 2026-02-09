import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/logos/amazon.png",
  "/logos/Google.png",
  "/logos/instagram.png",
  "/logos/linkedin.png",
  "/logos/metallb.png",
  "/logos/microsoft.png",
  "/logos/pay.png",
];

export default function TrustedSlider() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-6">

        {/* Heading */}
        <p className="text-center text-gray-400 uppercase tracking-widest mb-12">
          Trusted by Leaders Across Industries
        </p>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={40}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="!ease-linear"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-20">
                <img
                  src={logo}
                  alt="brand logo"
                  className="h-10 object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
