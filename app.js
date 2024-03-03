const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const router = express.Router();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// const app_listen = process.env.PORT || 3000;
const app_listen = process.env.PORT || 3000;
// const port = 3000;

// Serve static files from the "components" directory
// app.use(express.static(path.join(__dirname, 'components')));

mongoose.connect('mongodb://localhost:27017/contact-form', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Database Connected Successfully');
    })
    .catch((error) => {
        console.error('Something went wrong:', error.message);
    });


const User = require('./model/user')


// Define route to render HTML file
app.get('/', (req, res) => {
    // Render the HTML file located in the "components" directory
    res.sendFile(path.join(__dirname, 'components', 'Contact.html'));
});

// app.post('/', (req,res)=>{
//     const data = req.body
//     console.log(data)
//     // console.log(req.body)
// })
app.post('/', async (req, res) => {
    console.log(req.body)
    const data = new User(req.body)
    await data.save()
    res.send("Data sucessfully saved Special Thanks!")
    // alert("Data sucessfully saved Special Thanks!")
})

app.listen(app_listen, () => {
    console.log(`The app running on port ${app_listen}`)
})