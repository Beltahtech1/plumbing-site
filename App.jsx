import Hero from "./components/Hero";
import Emergency from "./components/Emergency";
import Services from "./components/Services";
import Diagnostic from "./components/Diagnostic";
import ContactMenu from "./components/ContactMenu";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Hero />
      <Emergency />
      <Services />
      <Diagnostic />
      <ContactMenu />
    </div>
  );
}

export default App;
