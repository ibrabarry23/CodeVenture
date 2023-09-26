import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

function CodeEditor() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const runCode = () => {
    try {
      if (code.trim() === '') {
        throw new Error('Il campo del codice è vuoto.');
      }

      let a = 2;
      let b = 3;

      let outputText = "Prima dello scambio\n";
      outputText += "a: " + a + "\n";
      outputText += "b: " + b + "\n";

      /* Scambio */
      let c = a;
      a = b;
      b = c;

      outputText += "Dopo lo scambio\n";
      outputText += "a: " + a + "\n";
      outputText += "b: " + b + "\n";

      setOutput(outputText);
    } catch (error) {
      setOutput(<span style={{ color: 'red' }}>Errore di esecuzione: {error.message}</span>);
    }
  };

  return (
    <div>
      <MonacoEditor
        width="600"
        height="500"
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={handleCodeChange}
      />
      <button onClick={runCode}>Esegui</button>
      <div>Output: {output}</div>
    </div>
  );
}

export default CodeEditor;
