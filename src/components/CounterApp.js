import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Component } from "react";
import { useContext } from "react";
import { CounterContext } from "../CounterContext";
import { store } from "../redux/redux";
import { useSelector, useDispatch } from "react-redux";

const CounterApp = () => {
    const counter = useSelector((state) => state.value);
    console.log(counter);
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
