import "./App.scss";
import React, { Component } from "react";

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            news: [],
            loading: true,
        };
    }

    componentDidMount() {
        this.fetchData("indonesia");
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.search !== this.state.search) {
            this.fetchData(this.state.search);
        }
    }

    async fetchData(query) {
        this.setState({ loading: true });
        const res = await fetch(
            `https://newsapi.org/v2/everything?q=${query}&language=id&apiKey=46333f35617f4517acb09d60e6e5af02`
        );
        const resJson = await res.json();
        console.log(resJson);
        this.setState({ news: resJson.articles, loading: false });
    }

    dateFormat(tanggal) {
        const tglPublis = new Date(tanggal);
        return `${tglPublis.getDate()}/${
            tglPublis.getMonth() + 1
        }/${tglPublis.getFullYear()} ${tglPublis.getHours()}:${tglPublis.getMinutes()}:${tglPublis.getSeconds()}`;
    }

    handleSearchChange = (e) => {
        this.setState({ search: e.target.value });
    };

    render() {
        return (
            <>
                <nav className="bg-primary text-light">
                    <div className="d-flex gap-4 container align-items-center py-3">
                        <h5 style={{ textWrap: "nowrap" }}>News App</h5>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search ..."
                            onChange={this.handleSearchChange}
                        />
                    </div>
                </nav>
                <div style={{ height: 71 }} />
                {this.state.loading ? (
                    <div
                        id="loader"
                        className="py-5 container d-flex justify-content-center"
                    >
                        <span className="loader" />
                    </div>
                ) : (
                    <div className="container-card container gap-3 py-5">
                        {this.state.news.map((article, index) => (
                            <div key={index} className="card-news">
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    className="mb-2"
                                />
                                <p className="fw-bold mb-1 fs-5">
                                    {article.title}
                                </p>
                                <p style={{ fontSize: 12 }}>
                                    {article.author} |{" "}
                                    {this.dateFormat(article.publishedAt)}
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
                                    rel="noopener noreferrer"
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
}

export default Lifecycle;
