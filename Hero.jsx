export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-accent text-white h-screen flex flex-col justify-center items-center text-center">
      <img src="/logo.svg" alt="Beltah Plumbing Logo" className="w-32 mb-6"/>
      <h1 className="text-4xl md:text-6xl font-bold">Reliable Plumbing in Nairobi</h1>
      <p className="mt-4 text-lg">24/7 Emergency Service • Modern Solutions</p>
      <div className="mt-6 flex gap-4">
        <a href="tel:+254700000000" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold">Call Now</a>
        <a href="https://wa.me/254700000000" className="bg-accent px-6 py-3 rounded-lg font-semibold">WhatsApp Us</a>
      </div>
    </section>
  );
}
