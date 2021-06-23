import React, { useReducer } from 'react';

export const AppContext = React.createContext([{}, () => { }]);

const initialState = {
    teaName: 'Thé Matcha',
    colors: ['#FF728A', '#FE8261', '#8F3939']
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TEA_NAME':
            return { ...state, teaName: action.value };
        case 'SET_COLORS':
            return { ...state, colors: action.value };
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