const express = require('express');
const app = express();
const port = 3000;

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.get('/hello/:fname/:surname', (req, res) => {
    const fname = req.params.fname;
    const surname = req.params.surname;
    res.send(`Hello ${fname} ${surname}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to Data Rep and Querying');
});

app.get("/whatever", (req, res) => {
    res.send("Whatever I want");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

