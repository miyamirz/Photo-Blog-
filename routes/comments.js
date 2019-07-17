const express = require('express');
const router = express.Router();
const fetchData = require('../utils');

router.get('/:id', async (req, res) => {
	let postId = req.params.id || 1;
	let response = await fetchData(
		`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
	);
	res.send(response);
});
module.exports = router;
