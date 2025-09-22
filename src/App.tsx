import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills"

function App() {
  return (
    <div className="bg-base-100 text-base-content">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills></Skills></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
