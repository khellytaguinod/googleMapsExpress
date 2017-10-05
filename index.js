const express = require('express'),
	  cors = require('cors'),
	  readSheet = require('./read').readSheet,
	  app = express()

let sheetID = '1_tG0XIS00c2NrB_2dWrgexCG75Dr7o0-9Zeuhjj1dQQ'


app.use(cors())
app.use(express.static('public'));

app.get('/data.json', (req,res) => {
	readSheet(sheetID, (err,data) => {
		res.json(data);
	});
});

app.listen(3000, () => {
	console.log(`App listening on port 3000`);
})

