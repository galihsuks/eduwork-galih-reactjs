import { useEffect, useRef, useState } from "react";
import Tombol from "../components/Tombol";

const Projects = () => {
    const itemRef = useRef();
    const [heightItem, setHeightItem] = useState(0);

    const waitForImageWidth = (imgRef) => {
        return new Promise((resolve) => {
            const checkWidth = () => {
                if (imgRef.current && imgRef.current.clientWidth > 0) {
                    resolve(imgRef.current.clientWidth);
                } else {
                    setTimeout(checkWidth, 50); // Cek lagi setelah 50ms
                }
            };
            checkWidth();
        });
    };

    useEffect(() => {
        waitForImageWidth(itemRef).then((width) => {
            setHeightItem(width);
        });
    }, []);
    return (
        <div className="bg-biru1">
            <div
                id="projects"
                className="container"
                style={{ paddingBlock: "2em" }}
            >
                <h5
                    style={{
                        marginBottom: "0",
                        marginTop: "0",
                        textAlign: "center",
                    }}
                >
                    PROJECTS
                </h5>
                <h1
                    style={{
                        margin: 0,
                        marginBottom: "0.7em",
                        textAlign: "center",
                    }}
                >
                    Project terbaru saya
                </h1>
                <div className="container-projects">
                    <div
                        className="item-projects"
                        ref={itemRef}
                        style={{ height: heightItem }}
                    >
                        <div className="depan">
                            <p className="nama">OMONG</p>
                            <p className="nama" style={{ marginBottom: "0" }}>
                                Chat App
                            </p>
                            <div className="isi">
                                <p className="stack">
                                    NextJs | MongoDB | Tailwind
                                </p>
                                <Tombol
                                    teks={"Lihat project"}
                                    url={"https://omong.galihsuks.com/"}
                                    varian={"putih"}
                                />
                            </div>
                        </div>
                        <img src="/img/omong.jpg" alt="" />
                    </div>
                    <div
                        className="item-projects"
                        style={{ height: heightItem }}
                    >
                        <div className="depan">
                            <p className="nama">ILENA</p>
                            <p className="nama" style={{ marginBottom: "0" }}>
                                Furniture
                            </p>
                            <div className="isi">
                                <p className="stack">
                                    Codeigniter | Bootstrap | MySQL | Midtrans
                                </p>
                                <Tombol
                                    teks={"Lihat project"}
                                    url={"https://ilenafurniture.com/"}
                                    varian={"putih"}
                                />
                            </div>
                        </div>
                        <img src="/img/ilena.jpg" alt="" />
                    </div>
                    <div
                        className="item-projects"
                        style={{ height: heightItem }}
                    >
                        <div className="depan">
                            <p className="nama">Lunarea</p>
                            <p className="nama" style={{ marginBottom: "0" }}>
                                Furniture
                            </p>
                            <div className="isi">
                                <p className="stack">
                                    Codeigniter | Bootstrap | MySQL | Midtrans
                                </p>
                                <Tombol
                                    teks={"Lihat project"}
                                    url={"https://lunareafurniture.com/"}
                                    varian={"putih"}
                                />
                            </div>
                        </div>
                        <img src="/img/lunarea.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Projects;
