const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors')

//rest object
const app = express()

app.use(express.json());
app.use(cors());
app.use('/auth', authRoutes);




//configure env
dotenv.config()


//port
const PORT = process.env.PORT || 3002;

//db connection
try {
    mongoose.connect('mongodb://localhost:27017/digital')
}
catch (err) {
    console.log(err)
}
let corsOptions = {
    origin: 'http://localhost:3002',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//middleware



//rest api
// app.get('/',(req,res) => {
//     res.send ("<h1>Welcome</h1>");
// })

//run listen
app.listen(3300, () => {
    console.log(`Server is running on ${PORT}`)
})