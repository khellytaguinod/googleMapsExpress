const express = require('express'),
	  cors = require('cors'),
	  readSheet = require('./read').readSheet,
	  app = express();

let sheetID = '1_tG0XIS00c2NrB_2dWrgexCG75Dr7o0-9Zeuhjj1dQQ';


app.use(cors());

app.use(express.static('public'));
app.use('/centerCoords', express.static('centerCoords'));
app.use('/coords', express.static('coordinates'));

app.use('/sheetData', (req,res) => {
	readSheet(sheetID, (err,data) => {
		res.json(data);
	});
});


module.exports = app;