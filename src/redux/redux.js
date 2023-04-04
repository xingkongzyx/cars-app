import { useContext } from "react";
import { createContext } from "react";

function counterReducer(state = { value: 0 }, action) {
    console.log("clicked:", state);
    switch (action.type) {
        case "counter/incremented":
            return { value: state.value + 1 };
        case "counter/decremented":
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const createStore = (reducer, initialState) => {
    let state = initialState || {};

    const listeners = [];
    function getState() {
        return state;
    }
    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach((listener) => listener(state));
    }
    function subscribe(fn) {
        listeners.push(fn);
    }
    return {
        getState,
        dispatch,
        subscribe,
    };
};

let store = createStore(counterReducer, { value: 0 });

let ReduxContext = createContext(store);

const Provider = ({ store, children }) => {
    return <ReduxContext value={store}>{children}</ReduxContext>;
};

const useDispatch = () => {
    const context = useContext(ReduxContext);
    return context.dispatch;
};

export { Provider, useDispatch, store };

