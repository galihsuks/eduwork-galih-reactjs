import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counters",
    initialState: { counter: 0 },
    reducers: {
        increment: (state, action) => {
            state.counter = state.counter + action.payload;
        },
        decrement: (state, action) => {
            state.counter =
                state.counter - action.payload < 0
                    ? 0
                    : state.counter - action.payload;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
