import { PhoneCall } from "lucide-react";

export default function ContactMenu() {
  return (
    <div className="fixed bottom-6 right-6">
      <button className="bg-accent text-white rounded-full p-4 shadow-lg">
        <PhoneCall />
      </button>
      <div className="absolute bottom-16 right-0 bg-white shadow-lg rounded-lg">
        <a href="tel:+254700000000" className="block px-4 py-2 hover:bg-gray-100">Call Us</a>
        <a href="https://wa.me/254700000000" className="block px-4 py-2 hover:bg-gray-100">WhatsApp</a>
      </div>
    </div>
  );
}
