const dotenv = require('dotenv')
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

dotenv.config()

//express app
const app = express();

//connect to mongoDB
mongoose.connect(process.env.DBURI)
    .then((result) => {
        //listen for requests
        app.listen(3000);
        console.log('connected to DB')})
    .catch((err) => console.log(err));

//register view engine
app.set("views", __dirname + "/views"); // used for Vercel
app.set("view engine", "ejs");

//middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

//route
app.get('/', (req, res) => {
    res.redirect('/blog');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

//blog routes
app.use('/blog', blogRoutes);

//404
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})

// Export the Express app for use within Vercel
module.exports = app;