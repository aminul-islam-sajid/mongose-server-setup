const { default: mongoose } = require('mongoose');

const { Schema } = mongoose;

const testSchema = new Schema({
	title: {
		type: String,
		required: true,
	}, // String is shorthand for {type: String}
	name: {
		type: String,
		required: true,
	},
});

const Test = mongoose.model('Test', testSchema);

//module.exports = getTest;
module.exports = Test;
