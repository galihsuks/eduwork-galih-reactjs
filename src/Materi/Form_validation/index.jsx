import "./App.scss";
import { useState } from "react";
import * as Validator from "validatorjs";

export default function FormValidation() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        const rules = {
            email: "required|email",
            password: "min:8|required",
        };

        let validation = new Validator(formData, rules);
        validation.passes();

        const arrErrors = [
            ...validation.errors.get("email"),
            ...validation.errors.get("password"),
        ];
        setErrors(arrErrors);

        if (arrErrors.length > 0) return;
        setErrors([]);
        window.alert("Berhasil registrasi");
    };

    return (
        <div
            style={{
                height: "100svh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background:
                    "linear-gradient(225deg, rgba(215,75,153,1) 0%, rgba(81,84,182,1) 58%, rgba(79,141,177,1) 88%)",
            }}
        >
            <div
                style={{
                    padding: "1em 2em",
                    backgroundColor: "white",
                    borderRadius: "1em",
                    width: "70%",
                    maxWidth: "500px",
                }}
            >
                <h1 style={{ marginBottom: "0.5em" }}>Registrasi</h1>
                <div
                    className="container-error"
                    style={{ marginBottom: "1em" }}
                >
                    {errors.map((e, ind_e) => (
                        <span key={ind_e}>{e}</span>
                    ))}
                </div>
                <form onSubmit={handleSubmit}>
                    <label style={{ marginBottom: "0.5em" }}>
                        <p>Email</p>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                });
                            }}
                        />
                    </label>
                    <label>
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                });
                            }}
                        />
                    </label>
                    <hr style={{ marginBlock: "1em" }} />
                    <button
                        type="submit"
                        style={{ width: "100%", marginBottom: "1em" }}
                    >
                        Daftar
                    </button>
                </form>
            </div>
        </div>
    );
}
