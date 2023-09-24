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
      // Esegui il codice fornito dall'utente
      eval(code);

      // Visualizza il messaggio "Hello, World!" tramite console.log
      console.log("Hello, World!");

      // Imposta un messaggio di output
      setOutput('Esecuzione completata. Controlla la console per "Hello, World!"');
    } catch (error) {
      setOutput('Errore di esecuzione: ' + error.message);
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
      {output && <div>Output: {output}</div>}
    </div>
  );
}

export default CodeEditor;
