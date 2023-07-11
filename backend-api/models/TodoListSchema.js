const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoListSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  createdBy: {
    type: Date,
    default: new Date(),
  },
});
module.exports = TodoList = mongoose.model("todolist", TodoListSchema);
