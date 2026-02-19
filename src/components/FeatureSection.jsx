export default function FeatureSection({
  title,
  description,
  features = [],
  bgColor = "#f7f7f7",
}) {
  return (
    <section style={{ backgroundColor: bgColor }} className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          {title}
        </h2>

        {/* Divider */}
        <div className="flex justify-center gap-2 my-4">
          <span className="w-8 h-[2px] bg-gray-300" />
          <span className="w-8 h-[2px] bg-gray-300" />
        </div>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        {/* Feature Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-14">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-4xl text-gray-800 mb-4">
                {item.icon}
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
