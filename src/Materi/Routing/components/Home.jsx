import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h5>Selamat Datang di</h5>
            <h1>FURNITUREQU</h1>
            <Link to={"/product"} className="btn-link">
                {`Lihat produk   >`}
            </Link>
        </>
    );
}
