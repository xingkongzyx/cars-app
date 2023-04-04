import React from "react";
import { useDispatch } from "../redux/redux";
import { useSelector } from "react-redux";

const CounterApp = () => {
    const counter = useSelector((state) => state.value);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({ type: "counter/incremented" });
    };
    const handleDecrement = () => {
        dispatch({ type: "counter/decremented" });
    };
    return (
        <div>
            <h1>Counter</h1>
            <div>{counter}</div>

            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
        </div>
    );
};

export default CounterApp;
