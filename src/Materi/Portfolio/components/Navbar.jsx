import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div>
                    <p className="logo">Galih</p>
                </div>
                <div className="container-list">
                    <a href="/#who-am-i">Who Am I</a>
                    <a href="/#ability">Ablity</a>
                    <a href="/#experience">Experience</a>
                    <a href="/#projects">Projects</a>
                    <a href="/#contact">Contact Me</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
