const express = require("express")
const { getTodos,getTodo,postTodo,putTodo,deleteTodo } = require("../controllers/todoControllers")

const routers = express.Router()

routers.get("/", getTodos)

routers.get("/:id", getTodo)

routers.post("/", postTodo)

routers.put("/:id", putTodo)

routers.delete("/:id", deleteTodo)
module.exports = routers