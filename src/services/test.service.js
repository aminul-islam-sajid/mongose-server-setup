const Test = require('../modules/test.module');
//const getTest = require('../modules/test.module');
Test.events.on('error', (err) => console.log(err.message));

exports.createTest = async (payload) => {
	try {
		const result = await Test.create(payload);
		return result;
	} catch (error) {
		console.log(error);
	}
};
exports.getTest = async () => {
	try {
		const result = await Test.find({});
		return result;
	} catch (error) {
		console.log(error);
	}
};
