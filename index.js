const express = require('express');

const app = express();

app.get('/', (req, res) => {
        res.send('Hello World from Group 9!');
    });

const port = process.env.PORT || 3000;
app.listen(port, () => {
        console.log('listening on port %s.\n', port);
    });

module.exports = app;