import "./App.scss";
import { useEffect, useState } from "react";

export default function Hook() {
    const [search, setSearch] = useState();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData(query) {
        setLoading(true);
        const res = await fetch(
            `https://newsapi.org/v2/everything?q=${query}&language=id&apiKey=46333f35617f4517acb09d60e6e5af02`
        );
        const resJson = await res.json();
        console.log(resJson);
        setNews(resJson.articles);
        setLoading(false);
    }

    useEffect(() => {
        fetchData(search ? search : "indonesia");
    }, [search]);

    const dateFormat = (tanggal) => {
        const tglPublis = new Date(tanggal);
        return `${tglPublis.getDate()}/${
            tglPublis.getMonth() + 1
        }/${tglPublis.getFullYear()} ${tglPublis.getHours()}:${tglPublis.getMinutes()}:${tglPublis.getSeconds()}`;
    };

    return (
        <>
            <nav className="bg-primary text-light">
                <div className="d-flex gap-4 container align-items-center py-3">
                    <h5 style={{ textWrap: "nowrap" }}>News App</h5>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </div>
            </nav>
            <div style={{ height: 71 }} />
            {loading ? (
                <div
                    id="loader"
                    className="py-5 container d-flex justify-content-center"
                >
                    <span className="loader" />
                </div>
            ) : (
                <div className="container-card container gap-3 py-5">
                    {news.map((article, index) => (
                        <div key={index} className="card-news">
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                className="mb-2"
                            />
                            <p className="fw-bold mb-1 fs-5">{article.title}</p>
                            <p style={{ fontSize: 12 }}>
                                {article.author} |{" "}
                                {dateFormat(article.publishedAt)}
                            </p>
                            <div className="description">
                                <div className="overlay"></div>
                                <p className="text-secondary">
                                    {article.description}
                                </p>
                            </div>
                            <a
                                href={article.url}
                                target="_blank"
                                style={{ width: "fit-content" }}
                                className="btn btn-sm btn-primary"
                            >
                                Baca selengkapnya
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
