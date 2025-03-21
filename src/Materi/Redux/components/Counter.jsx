import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../app/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const { counter } = useSelector((state) => state.counters);
    console.log(counter);

    return (
        <div
            style={{
                height: "100svh",
                width: "100vw",
                backgroundColor: "whitesmoke",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    backgroundColor: "whitesmoke",
                    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                    padding: "1em 2em",
                    borderRadius: "1em",
                }}
            >
                <h1 style={{ textAlign: "center" }}>Counter</h1>
                <div
                    style={{
                        display: "flex",
                        gap: "1em",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            border: "1px solid gray",
                            padding: "0px 10px",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            dispatch(decrement(1));
                        }}
                    >
                        -
                    </div>
                    <div>{counter}</div>
                    <div
                        style={{
                            border: "1px solid gray",
                            padding: "0px 10px",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            dispatch(increment(1));
                        }}
                    >
                        +
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Counter;
