import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import axios from 'axios';

function CodeEditor() {
  const [code, setCode] = useState(`function factorial(n) {
  // Implementa qui la funzione del fattoriale
}`);
  const [output, setOutput] = useState('');
  const [activeTestCase, setActiveTestCase] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const testCases = [
    { input: '0', expected: '1' },
    { input: '5', expected: '120' },
    { input: '10', expected: '3628800' },
  ];

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Esecuzione in corso...');
    try {
      const script = `
        ${code}
        console.log(factorial(${testCases[activeTestCase].input}));
      `;

      const response = await axios.post('http://localhost:3001/execute', {
        script: script,
        language: 'javascript',
      });

      const result = response.data.output.trim();
      const isCorrect = result === testCases[activeTestCase].expected;
      setOutput(`Output: ${result}\nCorretto: ${isCorrect ? 'Sì' : 'No'}\nOutput atteso: ${testCases[activeTestCase].expected}`);
    } catch (error) {
      setOutput(`Errore di esecuzione: ${error.message}`);
    }
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      {/* Problem Description */}
      <div className="md:w-1/4 w-full p-4 overflow-y-auto border-b md:border-b-0 md:border-r border-gray-700">
        <h1 className="text-2xl font-bold mb-4">Calcolo del Fattoriale</h1>
        <p className="mb-4">
          Implementa una funzione ricorsiva che calcoli il fattoriale di un numero intero non negativo.
        </p>
        <p className="mb-4">
          Il fattoriale di un numero n (indicato come n!) è il prodotto di tutti i numeri interi positivi da 1 a n.
        </p>
        <p className="mb-4">
          Per convenzione, il fattoriale di 0 è 1.
        </p>
        <h2 className="text-xl font-semibold mb-2">Formula:</h2>
        <pre className="bg-gray-800 p-2 rounded mb-4">
          n! = n * (n-1) * (n-2) * ... 
        </pre>
        <h2 className="text-xl font-semibold mb-2">Esempi:</h2>
        <pre className="bg-gray-800 p-2 rounded">
          {`5! = 5 * 4 * 3 * 2 * 1 = 120
3! = 3 * 2 * 1 = 6
0! = 1`}
        </pre>
      </div>

      {/* Code Editor */}
      <div className="flex-1 flex flex-col">
        <MonacoEditor
          height="60%"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={handleCodeChange}
          options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            fontSize: 14,
          }}
        />
        <div className="flex-1 p-4 bg-gray-800 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-2">Console Output:</h2>
          <pre className="whitespace-pre-wrap">{output}</pre>
        </div>
      </div>

      {/* Test Cases and Controls */}
      <div className="md:w-1/4 w-full p-4 border-t md:border-t-0 md:border-l border-gray-700 flex flex-col">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Casi di Test</h2>
          <div className="flex flex-wrap gap-2">
            {testCases.map((_, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded ${
                  activeTestCase === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                onClick={() => setActiveTestCase(index)}
              >
                Caso {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Input:</h3>
          <pre className="bg-gray-800 p-2 rounded mt-1">
            {testCases[activeTestCase].input}
          </pre>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Output Atteso:</h3>
          <pre className="bg-gray-800 p-2 rounded mt-1">
            {testCases[activeTestCase].expected}
          </pre>
        </div>
        <div className="mt-auto">
          <button
            className={`w-full py-2 rounded font-semibold ${
              isRunning
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
            onClick={runCode}
            disabled={isRunning}
          >
            {isRunning ? 'Esecuzione...' : 'Esegui Codice'}
          </button>
          <button className="w-full mt-2 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold">
            Invia Soluzione
          </button>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
