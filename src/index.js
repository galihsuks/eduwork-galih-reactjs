import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from "./Materi/Routing/App";
// import Home from "./Materi/Routing/components/Home";
// import Product from "./Materi/Routing/components/Product";
// import ProductDetail from "./Materi/Routing/components/ProductDetail";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App />}>
//                 <Route index element={<Home />} />
//                 <Route path="product">
//                     <Route index element={<Product />} />
//                     <Route path=":slug" element={<ProductDetail />} />
//                 </Route>
//             </Route>
//         </Routes>
//     </BrowserRouter>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
