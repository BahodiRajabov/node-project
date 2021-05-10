const express = require("express")

const app = express()

// Routes 
app.get("/", (req,res) => {
  res.status(200).send("Serverdan salom")
})

// _________LISTEN PORT___________
const port = process.env.PORT || 5000

app.listen(port, () => console.log("Listening port on " + port))