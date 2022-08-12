import './App.css';
import { Buttons } from './buttonsData';
import {useState} from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ['x','/','+','-','.'];

  const updateCalc = value => {
    if ((operators.includes(value) && calc === '') || 
        (operators.includes(value) && operators.includes(calc.slice(-1)))  
    ) {
      return;
    }
    setCalc(calc + value);
    if (!operators.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }

  const calcualte = () => {
    setCalc(eval(calc).toString());
  }

  const reset = () => {
    setCalc("");
    setResult("");
  }

  return (
    <div className="App">
      <div id='container'>
        <div id='forumla-screen'>{result ? <span>{result}</span> : ""}</div>
        <div id='output-screen'>{calc || "0"}</div>
        <div id='input-screen'>
          <div className='clear'>
              <button id='clear' className='reset-button' onClick={() => reset()}>AC</button>
          </div>
          <div className='equal'>
            <button id='equal' className='equal-button' onClick={() => calcualte()}>=</button>
          </div>
          {Buttons.map((item, id)=> {
            return (
            <div key={id} className={item.idName}>
              <button id={item.idName} className={item.cName} onClick={() => updateCalc(`${item.title}`)}>{item.title}</button>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;