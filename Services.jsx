import { Wrench, Droplet, ShowerHead } from "lucide-react";

const services = [
  { icon: Wrench, title: "Repairs", description: "Fix leaks, broken pipes, and more." },
  { icon: Droplet, title: "Installations", description: "Modern fittings and water systems." },
  { icon: ShowerHead, title: "Maintenance", description: "Keep your plumbing running smoothly." },
];

export default function Services() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition">
            <s.icon className="text-primary w-10 h-10"/>
            <h3 className="text-xl font-bold mt-4">{s.title}</h3>
            <p className="text-gray-600">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
