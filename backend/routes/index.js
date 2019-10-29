import {getValidationCheck} from "../modules/gridUtils"

import {getPossibleSolutionsGrid} from "../modules/solver"


var cors = require('cors')

var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Data = require('./data');

const dbRoute =
  'mongodb://yakikoren:3zqUCWAJG1K0@ds353957.mlab.com:53957/sudoku';
  // connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true ,   useUnifiedTopology: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// this is our get method
// this method fetches all available data in our database
router.get('/api/getData', (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.post('/api/validate', cors(corsOptions), (req, res) => {
    //var user_id = req.body.id;
    return res.json({ success: true, data: getValidationCheck(req.body.grid)  });
});

router.post('/api/possibleSolutions',  cors(corsOptions),(req, res) => {
  //var user_id = req.body.id;
  return res.json({ success: true,  data: { possibleSolutions: getPossibleSolutionsGrid(req.body.grid) } });
});

module.exports = router;
