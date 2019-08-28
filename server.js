const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const db = require('./config/db').database


mongoose.connect(db, {useNewUrlParser: true})
	.then(() => {
		console.log('Database connected Successfully')
	})
	.catch((err) => {
		console.log('Unable to connect to database', err)
	});
const port = process.env.PORT || 4000;

app.use(cors());

app.use(bodyParser.json());

/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
*/

app.get('/', (req, res) => {
	res.send('<h1> Hello World </h1>')
});

const accountRoutes = require('./routes/apis/account');

app.use('/api/accounts', accountRoutes);

app.listen(port, () => {
	console.log('Server started on port', port)
});