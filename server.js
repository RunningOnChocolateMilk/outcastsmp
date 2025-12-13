const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for knowledge bank
app.get('/knowledge', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'knowledge', 'index.html'));
});

// Route for individual knowledge pages
app.get('/knowledge/:page', (req, res) => {
  const pageName = req.params.page;
  res.sendFile(path.join(__dirname, 'public', 'knowledge', `${pageName}.html`));
});

app.listen(PORT, () => {
  console.log(`Outcast SMP website running on http://localhost:${PORT}`);
});



