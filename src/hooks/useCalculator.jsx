import { evaluate } from "mathjs";
import { useContext } from "react"
import { CalculatorContext } from "../utils/Store"

export const useCalculator = () => {
    const [state, setState] = useContext(CalculatorContext);

    const updateState = (value) => setState(state + value);

    const resolve = () => {
        if (state)
            setState(Math.round(evaluate(state) * 100) / 100);
    }

    const clear = () => setState('');

    return [updateState, resolve, clear]
}
