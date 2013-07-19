var express = require('express');

var app = express();

// compress static content
app.use(express.compress());
// static content from /public
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
