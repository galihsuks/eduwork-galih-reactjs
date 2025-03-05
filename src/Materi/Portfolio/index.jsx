import Navbar from "./components/Navbar";
import Ability from "./sections/Ability";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import WhoAmI from "./sections/WhoAmI";
import "./App.scss";

export default function Portfolio() {
    return (
        <>
            <Navbar />
            <WhoAmI />
            <Ability />
            <hr className="container" style={{ marginBlock: 0 }} />
            <Experience />
            <Projects />
            <Contact />
        </>
    );
}
