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

export let store = createStore(counterReducer, { value: 0 });

// store.subscribe(() => console.log(store.getState()));
