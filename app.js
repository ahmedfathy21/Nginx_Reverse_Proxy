const express = require('express');
const app = express();
const port = 3000; // Port the app will run on

// Define a route
app.get('/', (req, res) => {
    res.send('Hello from the Node.js app!');
});

// Start the server
app.listen(port, () => {
    console.log(`Node.js app is running on http://localhost:${port}`);
});