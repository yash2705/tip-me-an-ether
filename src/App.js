import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-violet-900 via-indigo-700 to-cyan-600 min-h-screen  overflow-x-hidden md:overflow-x-visible">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
