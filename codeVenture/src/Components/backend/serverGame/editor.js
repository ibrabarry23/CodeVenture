const express = require('express');
const bodyParser = require('body-parser');
const Docker = require('dockerode');
const docker = new Docker();

const app = express();
app.use(bodyParser.json());

app.post('/run', async (req, res) => {
  const { code, language } = req.body;

  let imageName;
  let compileCommand;
  let runCommand;

  switch (language) {
    case 'java':
      imageName = 'openjdk:latest';
      compileCommand = 'javac HelloWorld.java';
      runCommand = 'java HelloWorld';
      break;
    case 'javascript':
      imageName = 'node:latest';
      compileCommand = '';
      runCommand = `node -e "${code.replace(/"/g, '\\"')}"`;
      break;
    default:
      return res.status(400).send('Unsupported language');
  }

  try {
    const container = await docker.createContainer({
      Image: imageName,
      Tty: false,
      Cmd: ['/bin/bash', '-c', `${compileCommand && compileCommand + ' && '}${runCommand}`],
      AttachStdin: false,
      AttachStdout: true,
      AttachStderr: true,
      OpenStdin: false,
      StdinOnce: false
    });

    await container.start();

    const logs = await container.logs({ stdout: true, stderr: true, follow: true });
    const output = logs.toString();

    await container.remove();
    res.send(output);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
