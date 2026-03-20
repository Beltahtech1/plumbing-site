import { AlertTriangle } from "lucide-react";

export default function Emergency() {
  return (
    <section className="bg-accent text-white py-8 text-center">
      <div className="flex justify-center items-center gap-3">
        <AlertTriangle className="w-8 h-8"/>
        <h2 className="text-2xl font-bold">24/7 Emergency Plumbing</h2>
      </div>
      <p className="mt-2">Call us anytime: +254 700 000 000</p>
    </section>
  );
}
