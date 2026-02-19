export default function ServiceGridSection({
  eyebrow,
  title,
  services = [],
  columns = 3,
}) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Eyebrow */}
        {eyebrow && (
          <span className="text-sm text-gray-500 tracking-wide uppercase">
            {eyebrow}
          </span>
        )}

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2 mb-10">
          {title}
        </h2>

        {/* Grid */}
        <div
          className={`grid gap-6 ${
            columns === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : columns === 4
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          }`}
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <h4 className="text-white font-semibold text-lg">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
