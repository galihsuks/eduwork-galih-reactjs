import "./App.scss";
import Navbar from "./components/Navbar";
import Ability from "./sections/Ability";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import WhoAmI from "./sections/WhoAmI";

function App() {
    return (
        <div className="App">
            <Navbar />
            <WhoAmI />
            <Ability />
            <hr className="container" style={{ marginBlock: 0 }} />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
