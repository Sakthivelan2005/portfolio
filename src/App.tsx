import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WarningPopup from "./components/WarningPopup";
import Experience from "./components/Experience";
import Blog from "./components/Blog";

const App: React.FC = () => {
  return (
    <>
     <WarningPopup />
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
};

export default App;
