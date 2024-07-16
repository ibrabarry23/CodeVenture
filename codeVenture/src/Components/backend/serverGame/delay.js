const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const runCode = async () => {
  try {
    if (code.trim() === '') {
      throw new Error('Il campo del codice è vuoto.');
    }

    const sourceCode = `
    ${code}
    console.log(factorial(${testCases[testCase].input}));
    `;

    const response = await axios.post('https://judge0-ce.p.rapidapi.com/submissions', {
      source_code: sourceCode,
      language_id: 63, // ID for JavaScript in Judge0
      stdin: "",
      expected_output: testCases[testCase].expected.toString(),
      cpu_time_limit: 1,
      cpu_extra_time: 0.5,
      wall_time_limit: 1,
      memory_limit: 128000,
      number_of_runs: 1,
      stdin_visibility: false,
      secure: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        'X-RapidAPI-Key': '7b3e74965bmshc5ebb841960ffdp106b6cjsn9e1a25aa5951' // La tua chiave API
      }
    });

    const submissionId = response.data.token;

    // Attendere fino a quando la valutazione è completa
    let result;
    do {
      await delay(1000); // Aggiungi un ritardo di 1 secondo
      result = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${submissionId}`, {
        headers: {
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          'X-RapidAPI-Key': '7b3e74965bmshc5ebb841960ffdp106b6cjsn9e1a25aa5951' // La tua chiave API
        }
      });
    } while (result.data.status.id <= 2); // Status id 1, 2, 3 sono in coda o in esecuzione

    const outputText = `Test case: Fattoriale di ${testCases[testCase].input}\nRisultato ottenuto: ${result.data.stdout.trim()}\nRisultato atteso: ${testCases[testCase].expected}\n`;

    if (result.data.stdout.trim() === testCases[testCase].expected.toString()) {
      setOutput(<span style={{ color: '#4CAF50' }}>{outputText}Test case passato.</span>);
    } else {
      setOutput(<span style={{ color: 'red' }}>{outputText}Test case fallito.</span>);
    }
  } catch (error) {
    setOutput(<span style={{ color: 'red' }}>Errore di esecuzione: {error.message}</span>);
  }
};
