import logo from "./logo.svg";
import React from "react";
import "./App.css";
import CarsApp from "./components/CarsApp";
import { useState } from "react";
import { createContext } from "react";
import { CounterContext } from "./CounterContext";

import { store } from "./redux/redux";
import { Provider } from "react-redux";

/* 
  context API:
    React.createContext()
    Context.Provider component
    useContext hook

  Angular: NGRX
  Vue: Vuex

  Redux:
    Redux(core), React Redux, Redux Toolkit(immerjs, thunk, new syntax)
    Redux core: createStore
    React-redux: 
      Provider(context API), useSelector(reading,subscribe), useDispatch(write, store.dispatch), 
      connect (read write): function (mapStateToProps, mapDispatchToProps) return HOC 
    view action reducer store
*/

function App() {
    //const [counter, setCounter] = useState(1);

    return (
        //<CounterContext.Provider value={{increment, counter}}>
        <Provider store={store}>
            <div className="App">
                <CarsApp />
            </div>
        </Provider>

        //</CounterContext.Provider>
    );
}

export default App;
