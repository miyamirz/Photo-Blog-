const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const axios = require('axios');
require('./routes/startup')(app);
app.listen(PORT, () => {
	console.log('App listening on PORT : ', PORT);
});
