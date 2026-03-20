import { useState } from "react";

export default function Diagnostic() {
  const [issue, setIssue] = useState("");
  const [advice, setAdvice] = useState("");

  const handleDiagnostic = async () => {
    // Replace with your Gemini API endpoint
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: issue }),
    });
    const data = await response.json();
    setAdvice(data.answer);
  };

  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">AI Plumbing Diagnostic</h2>
      <div className="max-w-xl mx-auto">
        <textarea
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="Describe your plumbing issue..."
          className="w-full p-4 border rounded-lg"
        />
        <button
          onClick={handleDiagnostic}
          className="mt-4 bg-primary text-white px-6 py-3 rounded-lg"
        >
          Get Advice
        </button>
        {advice && (
          <div className="mt-6 bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold">Advice:</h3>
            <p>{advice}</p>
          </div>
        )}
      </div>
    </section>
  );
}
