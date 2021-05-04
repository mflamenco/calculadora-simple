//Import express and cors modules
const cors = require('cors');
const express = require('express');

//Create the express app with cors enabled
const app = express();
app.use(cors());
app.options('*', cors());

//Define port
const port = 8085;

//Define root controller (GET)
app.get('/', (req, res, next) => {
	res.send('Welcome to my API');
});

//Define get controller for suma
app.get('/addition', (req, res, next) => {
	var v1 = req.query.v1;
	var v2 = req.query.v2;
	console.log(v1);
	console.log(v2);

	var total = parseInt(v1) + parseInt(v2) ;
	var objResult = {
		total: total
	}
	res.send(objResult);
});

//Define get controller for resta
app.get('/subtraction', (req, res, next) => {
	var v1 = parseFloat(req.query.v1);
	var v2 = parseFloat(req.query.v2);
	console.log(v1);
	console.log(v2);

	var total = v1 - v2;
	console.log(total);
	var objResult = {
		total: total
	}
	res.send(objResult);
});

//Define get controller for multiplicación
app.get('/multiplication', (req, res, next) => {
	var v1 = parseFloat(req.query.v1);
	var v2 = parseFloat(req.query.v2);
	console.log(v1);
	console.log(v2);

	var total = v1 * v2;
	console.log(total);
	var objResult = {
		total: totall
	}
	res.send(objResult);
});

//Define get controller for división
app.get('/division', (req, res, next) => {
	var v1 = parseFloat(req.query.v1);
	var v2 = parseFloat(req.query.v2);
	console.log(v1);
	console.log(v2);

	var total = v1 / v2;
	console.log(total);
	var objResult = {
		total: total
	}
	res.send(objResult);
});
//Define get controller for raiz
app.get('/power', (req, res, next) => {
	var v1 = parseFloat(req.query.v1);
	console.log(v1);

	var total = v1 * v1;
	console.log(total);
	var objResult = {
		total: total
	}
	res.send(objResult);
});

app.listen(port, () =>
	console.log('Listening on port ' + port)
);
