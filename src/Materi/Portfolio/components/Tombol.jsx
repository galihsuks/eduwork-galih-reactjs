import "./Tombol.scss";
const Tombol = ({ teks, url, varian, style }) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            style={style}
            href={url}
            className={`btn ${varian}`}
        >
            {teks}
        </a>
    );
};
export default Tombol;
