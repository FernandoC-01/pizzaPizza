require("dotenv").config();
//console.log(".env varibles working")
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Error connecting to MongoDB: " +err));

//Test to see if it works
app.get("/", (req, res) => {
    res.send("Pizza API is running");
});

const PORT = process.env.PORT || 5000;
//const HOST = process.env.HOST;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});