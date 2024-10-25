
/*
    Express.js allows for easy creation of a server that 
    handles routes and uses URL params
*/

const express = require('express');
const app = express();

const port = 3000; // port for website

/*
    The bodyParser allows for access to the body of a post.
    This is necessary because unlike the get method, data
    is returned in the body, and not the URL.
*/
const bodyParser = require('body-parser');

const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// return status code 500 if there is an error in gets / posts
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// give reference to the index.html file
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));

    // handle get call from index.html
    app.get('/name', (req, res) => {
        const firstname = req.query.firstname;
        const lastname = req.query.lastname;
        // display query info
        res.send(`Hello ${firstname} ${lastname}`);
    });

    // handle post calls from index.html
    app.post('/name', (req, res) => {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        // display body info
        res.send(`Hello ${firstname} ${lastname}`);
    });
});


// display URL params
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

// return movies as JSON
app.get("/api/movies", (req, res) => {
    // app returns back JSON on movies
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    // status ok
    res.status(200).json({ myMovies: movies });

});

// log port to console
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

