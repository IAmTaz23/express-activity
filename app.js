const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})
app.get("/higherorlower", (req, res) => {
    // res.send("Higher or Lower")
    res.sendFile(path.join(__dirname, '/HigherorLower.html'))
})

app.get("/RPS", (req, res) => {
    // res.send("Rock, Paper, Scissors")
    res.sendFile(path.join(__dirname, '/RPS.html'))
})

app.get("/hangman", (req, res) => {
    // res.send("hangman")
    res.sendFile(path.join(__dirname, '/hangman.html'))
})




app.listen(3000)
console.log("Express is running")
