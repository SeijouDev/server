var express = require('express');   
var app = express();

app.get('/',  (req, res) => {
  res.json({status: 200, message: 'Ya conecto!'});
});


app.listen(3000,  () =>  {
  console.log('Example app listening on port 3000!');
});
