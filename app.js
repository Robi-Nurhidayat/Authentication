const express = require('express');

const app = express();

app.get('/', function(req, res) {

    console.log("ini berada dihalaman home")
})

app.listen(3000, function() {
    console.log("Server running on port 3000")
})