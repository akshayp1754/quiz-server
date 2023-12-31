const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const PORT =  8080

app.use(cors())
app.use(express.json())

mongoose
  .connect(` ${process.env.DATABASE}`)
  .then(() => console.log("connection established"));



 


app.use("/", require('./routes/categoryRoutes') )

app.use("/", require('./routes/comprehensionRoute'))

app.use("/", require('./routes/auth'))

app.use("/", require('./routes/clozeRoute'))


app.get("/", (req, res) => {
  return res.json({ welcome: `to my backend for the Quiz App` });
});



app.listen(PORT, () => {
  console.log("server is running on 8080...");
})