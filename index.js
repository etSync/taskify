const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Taskify!');
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

