import "../styles/App.css";
import { CalculatorContext } from '../utils/Store';
import { Screen } from '../components/Screen';
import { Button } from '../components/Button';
import { ClearButton } from '../components/ClearButton';
import { useCalculator } from '../hooks/useCalculator';
import { useContext } from 'react';


export const App = () => {
  const [updateState, resolve, clear] = useCalculator();
  const [state] = useContext(CalculatorContext);
  const buttonArray = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '=', 0, '.', '/'];

  return (
    <div className="App">
      <div className="calculatorContainer">
        <Screen state={state} />
        <div className='buttonContainer'>
          {
            buttonArray.map(element => <Button key={element} handleClick={element === '=' ? resolve : updateState}>{element}</Button>)
          }
        </div>
        <ClearButton handleClick={clear}>Clear</ClearButton>
      </div>
    </div>
  );
}