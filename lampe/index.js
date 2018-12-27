module.change_code = 1;
'use strict';
//Skill als Skill festlegen
var alexa = require( 'alexa-app' );
var app = new alexa.app( 'lampe' );
//App id von "lampe"
app.id = "amzn1.ask.skill.8bbdfce1-1a21-4d0c-a817-251916573f4a";
//Begrüßungsnachricht
app.launch( function(req, res) {
	res.say('Wie kann ich helfen?');
} );

//Falls ein Error passieren sollte, sehr unwahrscheinlich
app.error = function(exception, req, res) {
	console.log(exception)
	console.log(request);
	console.log(response);
	res.say( 'Sorry da ist was schief gelaufen ' + error.message);
};
//intent lamp, bis jetzt der einzige
app.intent('lamp',
  {
	//Einziger slot, FARBE -> Einzige Variable die benötigt wird
  "slots":
			{"FARBE":"AMAZON.Color"},
	//Sätze die benutzt werden können
	"utterances":[
			"Stell meine Lampe auf {FARBE}",
			"Lampe auf {FARBE}",
			"{FARBE}",
			"Lass meine Lampe in {FARBE} leuchten"]
  },
	//Antwort von Alexa, FARBE wird ausgegeben
  function(req,res) {
    var farbe = req.slot('FARBE');
    res.say("Deine Farbe Lautet: "+farbe);
  }
);

module.exports = app;
