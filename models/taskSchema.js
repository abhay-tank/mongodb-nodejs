const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
	todoContent: String,
	todoCompleted: Boolean,
});
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
