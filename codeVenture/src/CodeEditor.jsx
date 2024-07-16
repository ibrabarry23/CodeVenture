import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import axios from 'axios';

function CodeEditor() {
  const [code, setCode] = useState('function factorial(n) {\n  // Implementa qui la funzione\n}');
  const [output, setOutput] = useState('');
  const [activeTestCase, setActiveTestCase] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const testCases = [
    { input: 0, expected: 1 },
    { input: 1, expected: 1 },
    { input: 2, expected: 2 },
    { input: 3, expected: 6 },
    { input: 4, expected: 24 },
    { input: 5, expected: 120 },
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
        clientId: 'e2a9b7f2f0ff10e3b670a68e9765fb04',
        clientSecret: '673fda7300a9c953263ae262037f79d9c7c5465b93520a492ff1dc861aba0b6b',
        script: script,
        language: 'nodejs',
        versionIndex: '0'
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { output, statusCode, memory, cpuTime } = response.data;
      
      if (statusCode === 200) {
        const result = output.trim();
        const isCorrect = parseInt(result) === testCases[activeTestCase].expected;
        setOutput(`Output: ${result}\nCorretto: ${isCorrect ? 'Sì' : 'No'}\nOutput atteso: ${testCases[activeTestCase].expected}\nMemoria: ${memory} bytes\nTempo: ${cpuTime} sec`);
      } else {
        setOutput(`Errore nell'esecuzione. Codice di stato: ${statusCode}`);
      }
    } catch (error) {
      console.error('Errore dettagliato:', error);
      setOutput(`Errore di rete: ${error.message}. Controlla la console per i dettagli.`);
    }
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-white shadow-md p-4">
        <h1 className="text-xl font-bold">Calcolo del Fattoriale</h1>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/3 p-4 overflow-y-auto bg-white">
          <h2 className="text-lg font-semibold mb-2">Descrizione</h2>
          <p className="mb-4">
          Si scriva una funzione ricorsiva che calcoli il fattoriale di un numero. 

        Per calcolare il fattoriale si consideri questa formula: n! = n · (n − 1)          
        </p>

          <h3 className="font-semibold mb-2">Esempi:</h3>
          <pre className="bg-gray-100 p-2 rounded">
            {`Input: 4\nOutput: 24\n\nInput: 5\nOutput: 120`}
          </pre>
        </div>

        <div className="flex-1 border-l border-r border-gray-200">
          <MonacoEditor
            height="100%"
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
        </div>

        <div className="w-1/3 p-4 bg-white flex flex-col">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Casi di Test</h2>
            <div className="flex flex-wrap gap-2">
              {testCases.map((_, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded ${
                    activeTestCase === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveTestCase(index)}
                >
                  Case {index + 1}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="font-semibold">Input:</h3>
            <pre className="bg-gray-100 p-2 rounded mt-1">
              {testCases[activeTestCase].input}
            </pre>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Output Atteso:</h3>
            <pre className="bg-gray-100 p-2 rounded mt-1">
              {testCases[activeTestCase].expected}
            </pre>
          </div>

          <button
            className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${
              isRunning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={runCode}
            disabled={isRunning}
          >
            {isRunning ? 'Esecuzione...' : 'Esegui'}
          </button>

          <div className="mt-4 flex-1 overflow-y-auto">
            <h3 className="font-semibold">Risultato:</h3>
            <pre className="bg-gray-100 p-2 rounded mt-1 whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
