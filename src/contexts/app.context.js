import React, { useReducer } from 'react';

export const AppContext = React.createContext([{}, () => { }]);

const initialState = {
    teaName: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TEA_NAME':
            return { ...state, teaName: action.value };
        default:
            return state;
    }
};

const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;