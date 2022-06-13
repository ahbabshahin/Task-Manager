const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [
			true,
			'must provide a name',
			{
				new: true,
				runValidators: true,
			},
		],
		trim: true,
		// maxlength: [20, 'name can not be more than 20 characters'],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model('Task', TaskSchema);
