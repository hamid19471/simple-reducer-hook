import React, { useReducer, useState } from "react";

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
};

const Reducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Simple use Reducer Hook</h2>
            <h4>Count is : {count}</h4>
            <button onClick={() => dispatch("increment")}>Incremnet</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
        </div>
    );
};

export default Reducer;
