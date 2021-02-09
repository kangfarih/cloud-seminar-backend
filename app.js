const express = require('express');
const port = Number(Process.env.PORT || 8787);
const mongoose = require('mongoose');

// setup express
const app = express();

// connect to mongodb

mongoose.connect('mongodb+srv://adm-seminar:4dmSeminar@cluster0.wdfb4.mongodb.net/cloud-seminar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

app.use(express.json());
app.use(express.static('public'));

app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function (err, req, res, next) {
    console.log(err); // to see properties of message in our console
    res.status(422).send({
        error: err.message
    });
});

app.listen(port, () => {
    console.log(`App is listening at ${port}`);
})