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
    });

    const result = response.data.output.trim();
    const isCorrect = result === testCases[activeTestCase].expected;
    setOutput(`Output: ${result}\nCorretto: ${isCorrect ? 'Sì' : 'No'}\nOutput atteso: ${testCases[activeTestCase].expected}`);
  } catch (error) {
    console.error('Errore durante l\'esecuzione del codice:', error);  // Log dell'errore completo
    setOutput(`Errore di esecuzione: ${error.response ? error.response.data.error : error.message}`);
  }
  setIsRunning(false);
};
