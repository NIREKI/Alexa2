module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'lampe' );


app.launch( function( req, res ) {
	response.say( 'Sag einfach stelle meine Lampe auf' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);
	response.say( 'Sorry da ist was schief gelaufen ' + error.message);
};

app.intent('An',
  {
    "slots":{"FARBE":"AMAZON.Color"}
	,"utterances":[
		"Stell meine Lampe auf {FARBE}",
		"Lampe auf {FARBE}",
		"Lass meine Lampe in {FARBE} leuchten"]
  },
  function(req,res) {
    var farbe = req.slot('FARBE');
    res.say("Deine Farbe Lautet: "+farbe);
  }
);

module.exports = app;
