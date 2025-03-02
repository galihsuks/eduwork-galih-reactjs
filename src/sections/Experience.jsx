const Experience = () => {
    return (
        <div
            id="experience"
            className="container"
            style={{ paddingBlock: "2em" }}
        >
            <h5
                style={{
                    marginBottom: "0.4em",
                    marginTop: "0",
                    textAlign: "right",
                }}
            >
                EXPERIENCE
            </h5>
            <h1
                style={{ margin: 0, marginBottom: "0.5em", textAlign: "right" }}
            >
                Pengalaman bekerja
            </h1>
            <div
                style={{
                    display: "flex",
                    gap: "0.5em",
                    flexDirection: "column",
                }}
            >
                <div className="item-experience">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "1em",
                            alignItems: "center",
                            width: "100%",
                            marginBottom: "1em",
                        }}
                    >
                        <div style={{ flex: 1 }}>
                            <p className="judul" style={{}}>
                                Indosat Ooredoo Hutchison
                            </p>
                            <p className="tanggal">
                                18 April 2022 - 22 Juni 2022
                            </p>
                        </div>
                        <p className="label">Magang</p>
                    </div>
                    <p>
                        Puncak dari program Bangkit adalah kesempatan magang
                        berharga yang saya jalani di perusahaan Indosat Ooredoo
                        Hutchison. Selama masa magang ini, saya aktif terlibat
                        dalam tim yang bertanggung jawab atas pengembangan
                        sebuah chat aplications. Kolaborasi dengan rekan-rekan
                        tim memungkinkan saya untuk berkontribusi dalam berbagai
                        aspek pengembangan. Dalam konteks ini, peran saya
                        terutama berfokus pada pengembangan bagian API dan
                        manajemen Cloud Storage menggunakan Google Cloud
                        Platform.
                    </p>
                </div>
                <div className="item-experience">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "1em",
                            alignItems: "center",
                            width: "100%",
                            marginBottom: "1em",
                        }}
                    >
                        <div style={{ flex: 1 }}>
                            <p className="judul" style={{}}>
                                CV. Catur Bhakti Mandiri
                            </p>
                            <p className="tanggal">Oktober 2023 - Now</p>
                        </div>
                        <p className="label">Full time</p>
                    </div>
                    <p>
                        Saya bekerja full time di perusahaan CV. Catur Bhakti
                        Mandiri. Selama bekerja di sana, saya telah
                        mengembangkan dua situs e-commerce besar, yaitu untuk
                        brand Lunarea dan Ilena. Dalam pengembangan proyek ini,
                        saya menggunakan framework CodeIgniter dan
                        mengintegrasikan sistem pembayaran melalui Midtrans.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Experience;
