import app from "./server.js"
import connection from "./connect.js"


app.get('/', (req, res) => {
    res.send('Cannot GET/')
})




app.get('/livros', (req, res) => {
    connection.query('SELECT * FROM livros', function(error, results, fields) {
        if (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        } else {
            res.status(200).json(results);
        }
    });
});


app.get('/livros/:id', (req, res) => {
    const id = req.params.id
    connection.query('SELECT * FROM livros WHERE liv_id=' + id, function(error, results, fields) {
        if (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        } else {
            res.status(200).json(results);
        }
    });
});


app.get('/versiculos', (req, res) => {
    connection.query('SELECT * FROM versiculos', function(error, results, fields) {
        if (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        } else {
            res.status(200).json(results);
        }
    });
});


app.get('/versiculos/:id', (req, res) => {
    const id = req.params.id
    connection.query('SELECT * FROM versiculos WHERE ver_id =' + id, function(error, results, fields) {
        if (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        } else {
            res.status(200).json(results);
        }
    });
});

app.get('/versoes', (req, res) => {
    connection.query('SELECT * FROM versoes', function(error, results, fields) {
        if (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        } else {
            res.status(200).json(results);
        }
    });
});


app.get('/versoes/:id', (req, res) => {
    const id = req.params.id
    connection.query('SELECT * FROM versoes WHERE vrs_id=' + id, function(error, results, fields) {
        if (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        } else {
            res.status(200).json(results);
        }
    });
});

app.get('/testamentos', (req, res) => {
    connection.query('SELECT * FROM testamentos', function(error, results, fields) {
        if (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        } else {
            res.status(200).json(results);
        }
    });
});

app.get('/testamentos/:id', (req, res) => {
    const id = req.params.id
    connection.query('SELECT * FROM testamentos WHERE tes_id =' + id, function(error, results, fields) {
        if (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        } else {
            res.status(200).json(results);
        }
    });
});