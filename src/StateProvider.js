//Context API ---or-- REDUX//


import React, { createContext, useContext, useReducer} from "react";

//Prepares the data layer for Redux/ context API
export const StateContext = createContext();


//Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


//Pull info from the Data layer
export const useStateValue = () => useContext(StateContext);