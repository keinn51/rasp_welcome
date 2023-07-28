const express = require('express');
const app = express();
const path = require('path');

const port = 5505; // You can change this port number if you prefer a different one

// Serve the static files in the "public" directory (e.g., index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

