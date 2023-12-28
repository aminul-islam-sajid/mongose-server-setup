const testService = require('../services/test.service');

exports.createTestController = async (req, res) => {
	try {
		const testData = await testService.createTest(req.body);
		res.send(testData);
	} catch (error) {
		console.log(error);
		res.status(500).send('Error creating test');
	}
};

exports.getTestController = async (req, res) => {
	try {
		const testData = await testService.getTest(); // Call the getTest function explicitly

		res.send(testData);
	} catch (error) {
		console.log(error);
		res.status(500).send('Error fetching tests');
	}
};
