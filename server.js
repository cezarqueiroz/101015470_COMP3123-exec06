const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes');

const DB_URL = "mongodb+srv://101015470:NuBrr4mhfg8prAO2@cluster0.l53ef.mongodb.net/comp3123_lab6?retryWrites=true&w=majority";
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
//mongoose.Promise = global.Promise;


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", noteRoutes);  


app.route("/")
    .get((req, res) => {
        res.send("<h1>MongoDB + Mongoose Example</h1>");
    });

// app.get('/', (req, res) => {
//     res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
// });


app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});