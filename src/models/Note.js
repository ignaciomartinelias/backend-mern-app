const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
	{
		title: String,
		content: {
			type: String,
			required: true
		},
		author: String,
		date: {
			type: Date,
			default: Date.now
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Note', noteSchema);
