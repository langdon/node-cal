var express = require('express'), 
	events = require('./routes/events'),
	wines = require('./routes/wines');
 
var app = express();
 
app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);

app.get('/events', events.findAll);
app.get('/events/:id', events.findById);
 
app.listen(3000);
console.log('Listening on port 3000...');

