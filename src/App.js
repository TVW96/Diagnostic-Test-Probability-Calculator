import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [prevalence, setPrevalence] = useState('');
  const [sensitivity, setSensitivity] = useState('');
  const [specificity, setSpecificity] = useState('');
  const [result, setResult] = useState(null);

  const calculateProbability = () => {
    const P_D = parseFloat(prevalence);
    const P_T_given_D = parseFloat(sensitivity);
    const P_not_T_given_not_D = parseFloat(specificity);

    const P_not_D = 1 - P_D;
    const P_T_given_not_D = 1 - P_not_T_given_not_D;

    const P_D_given_T = (P_T_given_D * P_D) / ((P_T_given_D * P_D) + (P_T_given_not_D * P_not_D));
    const P_D_given_not_T = (P_not_T_given_not_D * P_not_D) / ((P_not_T_given_not_D * P_not_D) + ((1 - P_T_given_D) * P_D));

    setResult({
      positive: P_D_given_T,
      negative: P_D_given_not_T
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Diagnostic Probability Calculator </h1>

      </header>
      <div className='page'>
        <h2>Diagnostic Probability Calculator</h2>
        <div>
          <label>
            Prevalence (P(Disease)):
            <input type="number" value={prevalence} onChange={(e) => setPrevalence(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Sensitivity (P(Test+|Disease+)):
            <input type="number" value={sensitivity} onChange={(e) => setSensitivity(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Specificity (P(Test-|Disease-)):
            <input type="number" value={specificity} onChange={(e) => setSpecificity(e.target.value)} />
          </label>
        </div>
        <button onClick={calculateProbability}>Calculate</button>
        {result && (
          <div>
            <p>Probability of Disease given Positive Test: {result.positive.toFixed(4)}</p>
            <p>Probability of Disease given Negative Test: {result.negative.toFixed(4)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;