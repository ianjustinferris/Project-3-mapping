const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = express();
const pegRoute = require("./routes/pegs")

dotenv.config();

app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MONGO DB connected')
    })
    .catch((err) => console.log(err))

app.use("/api/pegs", pegRoute)

app.listen(8080, () => {
    console.log('server is running!')
})

