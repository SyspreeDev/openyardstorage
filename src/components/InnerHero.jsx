export default function InnerHero({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
}) {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      

      <div className="pt-36 relative z-10 mx-auto max-w-[1400px] px-6 h-full
                      flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight">
            {title}
          </h1>

          <p className="mt-6 text-white/80">
            {subtitle}
          </p>

          {buttonText && (
            <a
              href={buttonLink}
              className="inline-block mt-8
                         border border-white px-6 py-3 rounded-md
                         hover:bg-white hover:text-black transition"
            >
              {buttonText} →
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
