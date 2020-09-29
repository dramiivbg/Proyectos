




var express = require('express');


var app = express();
var cors = require('cors');
app.use(cors());


 

app.all('', function (req, res) {

  res.send({ data: Math.floor(Math.random() * (721000 - 1 ) + 1 ), code: 200, error: false });

});



app.listen(3000, function () {
  console.log('API inicializada en el puerto 3000');
});