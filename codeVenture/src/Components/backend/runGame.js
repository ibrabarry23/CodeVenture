import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { styled } from '@mui/system';
import { Button, Box, Typography, Tabs, Tab } from '@mui/material';
import axios from 'axios';

const CustomButton = styled(Button)({
  backgroundColor: '#4CAF50',
  color: 'white',
  '&:hover': {
    backgroundColor: '#45a049',
  },
});

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [testCase, setTestCase] = useState(0);
  const [tab, setTab] = useState(0);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const testCases = [
    { input: 0, expected: 1 },
    { input: 1, expected: 1 },
    { input: 2, expected: 2 },
    { input: 3, expected: 6 },
    { input: 4, expected: 24 },
    { input: 5, expected: 120 },
    { input: 6, expected: 720 },
  ];

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const runCode = async () => {
    try {
      if (code.trim() === '') {
        throw new Error('Il campo del codice è vuoto.');
      }

      const program = `
      ${code}
      console.log(factorial(${testCases[testCase].input}));
      `;

      let attempts = 0;
      let response;
      while (attempts < 5) {
        try {
          response = await axios.post('https://api.jdoodle.com/v1/execute', {
            script: program,
            language: "nodejs",
            versionIndex: "4",
            clientId: "e2a9b7f2f0ff10e3b670a68e9765fb04",
            clientSecret: "673fda7300a9c953263ae262037f79d9c7c5465b93520a492ff1dc861aba0b6b"
          });
          break;
        } catch (error) {
          if (error.response && error.response.status === 429) {
            await delay(2000);
          } else if (error.response && error.response.status === 403) {
            throw new Error('Errore di autorizzazione: verifica Client ID e Client Secret.');
          } else {
            throw error;
          }
        }
        attempts++;
      }

      if (!response) {
        throw new Error('Impossibile eseguire la richiesta dopo vari tentativi.');
      }

      const result = response.data;

      const outputText = `Test case: Fattoriale di ${testCases[testCase].input}\nRisultato ottenuto: ${result.output.trim()}\nRisultato atteso: ${testCases[testCase].expected}\n`;

      if (result.output.trim() === testCases[testCase].expected.toString()) {
        setOutput(<span style={{ color: '#4CAF50' }}>{outputText}Test case passato.</span>);
      } else {
        setOutput(<span style={{ color: 'red' }}>{outputText}Test case fallito.</span>);
      }
    } catch (error) {
      setOutput(<span style={{ color: 'red' }}>Errore di esecuzione: {error.message}</span>);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
        <MonacoEditor
          width="100%"
          height="50vh"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={handleCodeChange}
          options={{
            selectOnLineNumbers: true,
            automaticLayout: true,
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h6">Testcase</Typography>
        <CustomButton onClick={runCode}>Esegui</CustomButton>
      </Box>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
        <Tabs value={tab} onChange={handleTabChange} indicatorColor="primary" textColor="primary" centered>
          <Tab label={`Case ${testCase + 1}`} />
          <Tab label="Test Result" />
        </Tabs>
        {tab === 0 && (
          <Box sx={{ p: 3 }}>
            <Typography variant="body1">
              <strong>Input:</strong>
              <pre>nums = [{testCases[testCase].input}]\ntarget = {testCases[testCase].expected}</pre>
            </Typography>
          </Box>
        )}
        {tab === 1 && (
          <Box sx={{ p: 3 }}>
            <Typography variant="body1">
              {output}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CodeEditor;
