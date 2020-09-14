import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [{
        id: 1,
        text: 'hello',
        amount: 100
    },{
        id: 2,
        text: 'hello1',
        amount: 200
    }]
};

export const globalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <globalContext.Provider value={{
            transactions: state.transactions,
            addTransaction
        }}>
            {children}
        </globalContext.Provider>
    );

}
