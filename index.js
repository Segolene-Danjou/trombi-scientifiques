require('dotenv').config();

const express = require('express');
const app = express();


const session = require('express-session');

app.use(session({
    secret: process.env.SECRET_SESSION,
    saveUninitialized: false,
    resave: false
}));

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    if(req.session.login) {
        res.locals.login = req.session.login;
    }
    if(!req.session.history) req.session.history = [];
    req.session.history.push(req.url);
    next();
})

const router = require('./router');
app.use(router);

app.listen(process.env.PORT);
