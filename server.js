const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
let stringifyFile = "";

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
	fs.readFile('./test.json', 'utf-8', function(err, data) {
		if (err) throw err;
		stringifyFile = data;
		res.send(data);
	});
});

app.post('/updateNote/:note', function(req, res) {
	res.send(stringifyFile + req.params.note)
	fs.writeFile('./test.json', stringifyFile, function(err) {
		if (err) throw err;
		console.log('file updated');
	});
});

const server = app.listen(3000, function() {
	console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});

