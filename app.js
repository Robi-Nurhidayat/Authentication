require('dotenv').config();
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const express = require('express');

const app = express();

app.use(session({
    secret: "this is a secret",
    resave: true,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/latihan1')

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String }
});

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));


app.get('/', function(req, res) {

    res.render('home')
})


app.get('/register', function(req, res) {
    res.render('register')
})


app.post('/register', function(req, res) {
    console.log(req.body.email)
    console.log(req.body.password)
})

app.listen(3000, function() {
    console.log("Server running on port 3000")
})