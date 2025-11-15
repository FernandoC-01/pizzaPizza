require("dotenv").config()
console.log(".env varibles working")
const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT
const HOST = process.env.HOST

app.listen(PORT, HOST, () => {
    console.log(`[server] listening on ${HOST}:${PORT}`)
})