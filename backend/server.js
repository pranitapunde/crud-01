const express = require("express")
const connectDB = require("./config/db_config")
const colors = require("colors")

require("dotenv").config()
const app = express()

const PORT = process.env.PORT || 7000
// DB Connection
connectDB();

// Body Parser Midlleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

// Entry Route
app.get("/", (req,res) => {
  res.status(200);
  res.json({
    msg : "WELCOME TO CRUD API 1.0"
  })
})

// Todo Routes
app.use("/api/todo",require("./routers/TodoRouter"))

// CREATE SERVER
app.listen(PORT,() => {
    console.log(`server is runing at PORT : ${PORT}` .bgGreen.white)
})