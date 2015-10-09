var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('I am a computer. Beep beep boop bop.');
});

app.get('/excited-raccoon', function(request, response){
    response.send('I am a computer. Beep beep boop bop. Touch my circuts. Beep beep beep. My hard drive is spinning very rapidly. Ba ba ba beep bap booop booooop.');
});

app.listen(process.env.PORT || 4000);