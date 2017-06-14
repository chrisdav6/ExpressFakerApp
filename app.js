var express = require("express");
var faker = require("faker");
var app = express();

app.get("/", function(req, res) {
	var phrase = faker.fake("{{hacker.phrase}}");
	res.render("index.ejs", {phraseVar: phrase});
});

var server = app.listen(process.env.PORT || 3000,function(){
   console.log('express server listening on port ' + server.address().port);
});