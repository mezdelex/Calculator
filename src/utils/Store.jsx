import { createContext, useState } from "react";

const initialState = '';
export const CalculatorContext = createContext(initialState);

export const Store = ({ children }) => {
    const [state, setState] = useState(initialState);

    return (
        <CalculatorContext.Provider value={[state, setState]}>
            {children}
        </CalculatorContext.Provider>
    );
}