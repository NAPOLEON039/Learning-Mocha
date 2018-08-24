const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App'
    });
});

app.get('/users', (req, res) => {
    res.send([{name: 'Nihar', age: 19}, {name: 'Satou', age: 15}, {name: 'Ainz', age: 28}]);
});

app.listen(3000);
module.exports.app = app;