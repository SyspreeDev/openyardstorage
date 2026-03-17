export default function ThankYou() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] bg-gray-900 text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/contact/bg.png')"
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Thank You
        </h1>

        <p className="text-lg text-gray-200 mb-6">
          Your message has been sent successfully!
        </p>

        <a
          href="/"
          className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg"
        >
          Back to Home
        </a>

      </div>
    </section>
  );
}