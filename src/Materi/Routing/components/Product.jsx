import { Link } from "react-router-dom";
import { products } from "./data";

export default function Product() {
    return (
        <>
            <h5
                style={{
                    textAlign: "center",
                    marginBottom: "2em",
                    fontWeight: "bold",
                    letterSpacing: "5px",
                }}
            >
                OUT PRODUCTS
            </h5>
            <div className="container-product">
                {products.map((p, ind_p) => (
                    <Link
                        key={ind_p}
                        className="item-product"
                        to={`/product/${p.slug}`}
                    >
                        <img src={p.gambar} alt="" />
                        <h1>{p.nama}</h1>
                        <p>{p.harga}</p>
                        <p className="desc">{p.deskripsi}</p>
                    </Link>
                ))}
            </div>
        </>
    );
}
