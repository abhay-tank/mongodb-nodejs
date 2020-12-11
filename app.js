const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { config } = require("./configuration/config");
const Task = require("./models/taskSchema");
mongoose.connect(
	config.DATABASE_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, connection) => {
		if (err) {
			console.error(err);
			return err;
		}
		console.log("Connected");
		Task.create({
			todoContent: "Learn Mongoose",
			todoCompleted: false,
		});
	}
);
