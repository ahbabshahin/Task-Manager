const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
	const task = await Task.find({});
	// console.log(task);
	res.json({ task });
};

const createTask = async (req, res) => {
	const task = await Task.create(req.body);
	console.log(task);
	res.json(task);
	// res.send('successful');
};

const getTask = (req, res) => {
	res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
	res.json(req.body);
};

const deleteTask = (req, res) => {
	res.send('delete task');
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
