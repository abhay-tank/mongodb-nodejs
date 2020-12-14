const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { config } = require("./configuration/config");
const Todo = require("./models/todoSchema");
mongoose.connect(
	config.REMOTE_DATABASE_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, connection) => {
		if (err) {
			console.error(err);
			return err;
		}
		console.log("Connected");
		let todo = new Todo({
			todoContent: "",
			todoCompleted: false,
		});
		todo
			.save()
			.then((result) => {
				console.log("Added", result);
			})
			.catch((err) => {
				console.error(err);
			});
		Todo.findOneAndUpdate();
	}
);
