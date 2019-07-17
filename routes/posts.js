const express = require('express');
const router = express.Router();
const fetchData = require('../utils');
router.get('/', async (req, res) => {
	let response = await fetchData(
		'https://jsonplaceholder.typicode.com/posts?userId=1'
	);
	res.send(response);
});
module.exports = router;
