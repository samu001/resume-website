import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import SkillSection from "./Components/Skills/SkillSection";
import CodingProjects from "./Components/CodingProjects/CodingProjects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <>
            <Hero />
            <About />
            <SkillSection />
            <CodingProjects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
