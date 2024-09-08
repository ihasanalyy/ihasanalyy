import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [advice,setAdvice] = useState("")
  const adviceRender = async () => {
    await fetch("https://api.adviceslip.com/advice")
      .then((res => {
        return res.json();
      }))
      .then((res => {
        console.log(res.slip.advice);
        setAdvice(res.slip.advice)
      }))
     
  }
  
  return (
    <div className="App">
      <h1>Hello world</h1>
      <h3>Advice project</h3>
      <h5>{advice}</h5>
      <button onClick={adviceRender}>Give Advice</button>
    </div>
   );
}

export default App;
