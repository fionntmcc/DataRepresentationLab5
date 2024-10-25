const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Data Rep and Querying');
});

app.get("/whatever", (req, res) => {
    res.send("Whatever I want");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});