const express = require("express");
const TodoList = require("./../models/TodoListSchema");

const router = express.Router();

router.get("/todo-list", async (req, res) => {
  try {
    const todoLists = await TodoList.find();
    res.status(200).json({ todoLists, message: "Successfully get" });
  } catch (error) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/todo-list", async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title Field is Required" });
  }
  try {
    const todoList = new TodoList({
      title: title,
      description: description || "",
    });

    await todoList.save();
    res.status(200).json({ todoList, message: "Successfully Created" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/todo-list/:id", async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "id required" });
    }

    const { title, description } = req.body;

    if (!title && !description) {
      return res.status(400).json({ message: "Atleast one field is required" });
    }
    const todoList = await TodoList.findOne({ _id: req.params.id });

    if (!todoList) {
      return res.status(400).json({ message: "Todo list not found" });
    }

    if (title) {
      todoList.title = title;
    }
    if (description) {
      todoList.description = description;
    }

    await todoList.save();
    res.status(200).json({ todoList, message: "Successfully Updated" });
  } catch (error) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/todo-list/:id", async (req, res) => {
  try {
    await TodoList.findByIdAndRemove({ _id: req.params.id });

    res.status(200).json({ message: "Successfully Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
