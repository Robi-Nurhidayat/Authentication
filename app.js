require('dotenv').config();
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const express = require('express');

const app = express();

app.get('/', function(req, res) {

    console.log("ini berada dihalaman home")
})

app.listen(3000, function() {
    console.log("Server running on port 3000")
})