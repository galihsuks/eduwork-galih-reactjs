const Ability = () => {
    return (
        <div id="ability" className="container" style={{ paddingBlock: "2em" }}>
            <h5 style={{ marginBottom: "0.4em", marginTop: "0" }}>ABILITY</h5>
            <h1 style={{ margin: 0, marginBottom: "-5px" }}>
                Apa yang bisa saya
            </h1>
            <h1 style={{ margin: 0 }}>Lakukan?</h1>
            <div style={{ display: "flex", gap: "1em" }}>
                <div style={{ display: "flex", gap: "1em", flex: 1 }}>
                    <ul>
                        <li>Figma | 2021</li>
                        <li>HTML | 2022</li>
                        <li>CSS | 2022</li>
                        <li>Javascript | 2022</li>
                        <li>PHP | 2023</li>
                        <li>ExpressJs | 2022</li>
                        <li>Firebase | 2022</li>
                        <li>MongoDB | 2021</li>
                    </ul>
                    <ul>
                        <li>MySQL | 2023</li>
                        <li>Bootstrap | 2023</li>
                        <li>ReactJs | 2022</li>
                        <li>Codeigniter | 2023</li>
                        <li>NextJs | 2024</li>
                        <li>Tailwind | 2024</li>
                        <li>Typescript | 2024</li>
                    </ul>
                </div>
                <div style={{ flex: 1 }}>
                    <h5 style={{ margin: 0 }}>Extra Skill</h5>
                    <ul>
                        <li>Rest API</li>
                        <li>Midtrans Integration</li>
                        <li>RajaOngkir Integration</li>
                        <li>WordPress</li>
                        <li>JSON Web Token</li>
                        <li>Web Socket</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Ability;
