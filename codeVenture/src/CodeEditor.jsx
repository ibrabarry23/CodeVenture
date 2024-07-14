import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

function CodeEditor() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  function factorial(n)  {
    if (n === 0 ) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  


  const runCode = () => {
    try {
      if (code.trim() === '') {
        throw new Error('Il campo del codice è vuoto.');
      }

      eval(code);

      let a = 5;

      let outputText = "Calcolo del fattoriale di a\n";
      outputText += `Fattoriale di ${a}: ${factorial(a)}\n`;

      setOutput(<span style={{ color: '#4CAF50' }}>{outputText}</span>);
    } catch (error) {
      setOutput(<span style={{ color: 'red' }}>Errore di esecuzione: {error.message}</span>);
    }
  };

  return (
    <div className='rounded-md relative z-0 text-left '>
      <MonacoEditor
        width="600"
        height="400"
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={handleCodeChange}
        className="rounded" 
      />
      <button className='p-8 flex justify-center w-full gap-4 sfondoEsegui items-center text-white' onClick={runCode}>Esegui <svg xmlns="http://www.w3.org/2000/svg" className='fill-white w-8 h-8' x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
        <path d="M 6.78125 2 C 6.769531 2.003906 6.761719 2.027344 6.75 2.03125 C 6.722656 2.035156 6.683594 2.023438 6.65625 2.03125 C 6.445313 2.054688 6.25 2.140625 6.09375 2.28125 C 5.421875 2.648438 5 3.402344 5 4.21875 L 5 46 C 5 46.621094 5.273438 47.273438 5.78125 47.65625 C 6.015625 47.917969 6.371094 48.035156 6.71875 47.96875 C 7.175781 47.992188 7.65625 47.890625 8.0625 47.65625 C 8.910156 47.164063 26.21875 37.15625 26.21875 37.15625 L 35.25 31.9375 C 35.269531 31.929688 35.292969 31.917969 35.3125 31.90625 L 35.4375 31.84375 C 35.4375 31.84375 35.558594 31.78125 35.5625 31.78125 C 35.574219 31.769531 35.582031 31.761719 35.59375 31.75 C 35.863281 31.59375 43.261719 27.335938 44.28125 26.75 C 44.984375 26.34375 45.542969 25.683594 45.53125 24.875 C 45.519531 24.066406 44.949219 23.4375 44.3125 23.09375 C 43.960938 22.90625 41.679688 21.601563 39.5625 20.375 C 37.445313 19.148438 35.4375 17.96875 35.4375 17.96875 L 26.21875 12.65625 C 26.21875 12.65625 9.457031 2.976563 8.46875 2.40625 C 8.121094 2.207031 7.726563 2.046875 7.34375 2 C 7.152344 1.976563 6.96875 1.96875 6.78125 2 Z M 7 4.6875 L 27.375 24.90625 L 7 45.125 Z M 11.75 6.59375 C 16.835938 9.53125 25.21875 14.375 25.21875 14.375 L 33.28125 19.03125 L 28.78125 23.5 Z M 35.0625 20.0625 C 35.542969 20.34375 36.765625 21.054688 38.5625 22.09375 C 40.679688 23.320313 42.851563 24.5625 43.375 24.84375 C 43.425781 24.871094 43.410156 24.886719 43.4375 24.90625 C 43.398438 24.933594 43.386719 24.941406 43.28125 25 C 42.320313 25.554688 36.089844 29.171875 35.09375 29.75 L 30.1875 24.90625 Z M 28.78125 26.28125 L 33.3125 30.78125 L 25.21875 35.4375 C 25.21875 35.4375 17.054688 40.148438 11.78125 43.1875 Z"></path>
      </svg> </button>

      <div className='p-2 sfondoEsegui text-white roundOut'>Output: {output}</div>
    </div>
  );
}

export default CodeEditor;


/*
function factorial(n)  {
  if (n === 0 ) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let n = 5;
let calcolaFattoriale = factorial(n);
console.log(calcolaFattoriale);


function fattoriale(n) {
  let risultato = 1;
  for (let i = 2; i <= n; i++) {
    risultato *= i;
  }
  return risultato;
}

const numero = 5;
const risultato = fattoriale(numero);
console.log(`Il fattoriale di ${numero} è: ${risultato}`);

*/ 