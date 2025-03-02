import { useEffect, useRef, useState } from "react";
import Tombol from "../components/Tombol";

const WhoAmI = () => {
    const gambarRef = useRef();
    const [widthGambar, setWidthGambar] = useState(0);

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
        waitForImageWidth(gambarRef).then((width) => {
            setWidthGambar(width + 45);
        });
    }, []);

    return (
        <div className="bg-biru1">
            <div
                id="who-am-i"
                className="container"
                style={{
                    paddingTop: "1.6em",
                    display: "flex",
                    gap: "2em",
                    alignItems: "stretch",
                }}
            >
                <div
                    style={{
                        // flex: 1,
                        width: `${widthGambar}px`,
                        position: "relative",
                    }}
                >
                    <img
                        style={{ height: "100%", position: "absolute" }}
                        src="/img/fotoku1.png"
                        alt=""
                        ref={gambarRef}
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <h5 style={{ marginBottom: "0.4em", marginTop: "0" }}>
                        Full Stack Developer
                    </h5>
                    <h1 style={{ margin: 0, marginBottom: "-5px" }}>
                        Galih Sukmamukti
                    </h1>
                    <h1 style={{ margin: 0, marginBottom: "0.3em" }}>
                        Hidayatullah
                    </h1>
                    <p style={{ marginBottom: "1em" }}>
                        Saya adalah lulusan Sarjana Institut Teknologi Sepuluh
                        Nopember pada tahun 2023 dengan spesialisasi sebagai
                        full stack developer. Memiliki pengalaman profesional
                        selama 1 tahun sebagai full stack developer, ditambah
                        pengalaman magang selama 1 semester. Selama karier saya,
                        saya telah berkontribusi dalam pembuatan dua situs web
                        e-commerce untuk brand Lunarea Furniture dan Ilena
                        Furniture, di mana saya terlibat dalam pengembangan
                        end-to-end yang meliputi front-end dan back-end. Saya
                        siap membawa keahlian teknis dan kreativitas saya untuk
                        memberikan solusi terbaik pada proyek berikutnya!
                    </p>
                    <Tombol
                        style={{ marginBottom: "3em" }}
                        teks={"My Resume"}
                        url={
                            "https://drive.google.com/file/d/1mRQjHty8kRb-ASfN5KOkV7WuCY7kU0Mc/view?usp=sharing"
                        }
                        varian={"merah"}
                    />
                </div>
            </div>
        </div>
    );
};
export default WhoAmI;
