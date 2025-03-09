import { Link, Outlet } from "react-router-dom";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <nav>
                <Link to={"/"}>HOME</Link>
                <Link to={"/product"}>PRODUCTS</Link>
            </nav>
            <div className="content">
                <div className="container-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default App;
