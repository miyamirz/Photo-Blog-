const express = require('express');
const posts = require('./posts');
const albums = require('./albums');
const photos = require('./photos');
const comments = require('./comments');
module.exports = function(app) {
	app.use('/api/posts', posts);
	app.use('/api/albums', albums);
	app.use('/api/photos', photos);
	app.use('/api/comments', comments);
};
