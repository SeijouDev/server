var express = require('express');   
var app = express();

var port = process.env.PORT || 8000;

app.get('/',  (req, res) => {
  res.json({status: 200, message: 'Ya conecto!'});
});


app.listen(port,  () =>  {
  console.log('Example app listening on port '+port+'!');
});
