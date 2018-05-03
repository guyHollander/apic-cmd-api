var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var routes = require('./routes/cmd-routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('apic cmd RESTful API server started on: ' + port);
