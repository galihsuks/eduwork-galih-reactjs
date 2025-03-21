import { Link, useParams } from "react-router-dom";
import { products } from "./data";

export default function ProductDetail() {
    const params = useParams();
    const productSelected = products.filter((e) => {
        return e.slug === params.slug;
    })[0];
    return (
        <>
            <Link to={"/product"} className="btn-link">
                {`< Lihat produk`}
            </Link>
            <img
                src={productSelected.gambar}
                alt=""
                style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    borderRadius: "2em",
                    marginTop: "1em",
                }}
            />
            <h1
                style={{
                    marginTop: "0.6em",
                    fontSize: "50px",
                    marginBottom: "0",
                }}
            >
                {productSelected.nama}
            </h1>
            <h3 style={{ marginBottom: "0.5em", fontWeight: "bold" }}>
                {productSelected.harga}
            </h3>
            <p>{productSelected.deskripsi}</p>
        </>
    );
}
