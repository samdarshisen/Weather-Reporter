var express = require('express');
var axios = require('axios');
var router = express.Router();
var {response} = require('express');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index' , {data:response.data});
});
router.get('/submit', function(req, res) {
 var city = req.query.city;
 var api =`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a0e78d3b449db7059df0a38abd3952f8`
axios.get(api).then(function(response){
 // console.log(response)
res.render('index', {data:response.data});
})
});

module.exports = router;
