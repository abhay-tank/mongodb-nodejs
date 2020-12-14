const mongoose = require("mongoose");
const uniqid = require("uniqid");

const todoSchema = new mongoose.Schema({
	todoId: {
		type: String,
		required: true,
		default: uniqid(),
	},
	todoContent: {
		type: String,
		validate: {
			validator: (todoContent) => {
				return todoContent.trim().length;
			},
			message: "Todo should not be null",
		},
	},
	todoCompleted: Boolean,
});
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
