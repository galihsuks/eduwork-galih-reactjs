const { useState } = require("react");

const Alert = ({ teks }) => {
    const [url, setUrl] = useState("");
    return (
        <div
            style={{
                position: "fixed",
                top: "10px",
                left: "0",
                height: "10px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    padding: "1em 2em",
                    border: "1px solid black",
                    height: "fit-content",
                }}
            >
                <p style={{ margin: "0" }}>{teks}</p>
                <input
                    type="text"
                    onChange={(e) => {
                        setUrl(e.target.value);
                    }}
                />
                <a href={url} target="_blank" rel="noreferrer">
                    Kunjungi
                </a>
            </div>
        </div>
    );
};
export default Alert;
