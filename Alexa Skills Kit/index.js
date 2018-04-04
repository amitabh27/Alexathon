

'use strict';

const Alexa = require('alexa-sdk');

var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var request=require('request');

var err="No information available: Please check the details that you have provided";

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

const APP_ID = undefined;  

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'something',
            ],
            SKILL_NAME: 'something',
            GET_FACT_MESSAGE: "Here's your dummy ",
            HELP_MESSAGE: 'help..',
            HELP_REPROMPT: 'What',
            STOP_MESSAGE: 'bye',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'A year on Mercury is just 88 days long.',
            ],
            SKILL_NAME: 'something Facts',
        },
    },
    'en-GB': {
        translation: {
            FACTS: [
                'A year on Mercury is just 88 days long.',
            ],
            SKILL_NAME: 'something Facts',
        },
    },
    'de': {
        translation: {
            FACTS: [
                'simple fact....',
            ],
            SKILL_NAME: 'something',
            GET_FACT_MESSAGE: 'message... ',
            HELP_MESSAGE: 'description...',
            HELP_REPROMPT: 'hep....',
            STOP_MESSAGE: 'bye...',
        },
    },
};



const first = (source, destination, date, callback) => {
        request('https://packup-bot.herokuapp.com/f/cheapest/'+source+'/'+destination+'/'+date, function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				
				callback(null, res);
		
			}
		});
};
const second = (source, destination, date,airline,classtype,callback) => {
        request('https://packup-bot.herokuapp.com/f/specific/'+source+'/'+destination+'/'+date+'/'+airline+'/'+classtype, function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				callback(null, res);
		
			}
		});
};
const third = (source, destination, date,classtype,callback) => {
        request('https://packup-bot.herokuapp.com/f/any/'+source+'/'+destination+'/'+date+'/'+classtype, function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				callback(null, res);
		
			}
		});
};


//google

const fourth = (loc,callback) => {
        request('https://packup-bot.herokuapp.com/n/food/'+loc+'/'+'AIzaSyCweXwBZ82TU1ZdOCFoDFYhx9l75vh6E50', function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				callback(null, res);
		
			}
		});
};
const fifth = (loc,callback) => {
        request('https://packup-bot.herokuapp.com/n/natural/feature/'+loc+'/'+'AIzaSyCweXwBZ82TU1ZdOCFoDFYhx9l75vh6E50', function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				callback(null, res);
		
			}
		});
};
const sixth = (loc,callback) => {
        request('https://packup-bot.herokuapp.com/n/place/of/worship/'+loc+'/'+'AIzaSyCweXwBZ82TU1ZdOCFoDFYhx9l75vh6E50', function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				callback(null, res);
		
			}
		});
};

//buses

const seventh = (source, dest, date,callback) => {
        request('https://packup-bot.herokuapp.com/b/list/'+source+'/'+dest+'/'+date, function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				callback(null, res);
		
			}
		});
};


//rails


const eighth = (no,date,callback) => {
        request('https://packup-bot.herokuapp.com/r/livetrainstatus/'+no+'/'+date+'/48s1tado2n', function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				callback(null, res);
		
			}
		});
};
const ninth = (pnr,callback) => {
        request('https://packup-bot.herokuapp.com/r/pnrstatus/'+pnr+'/48s1tado2n', function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				callback(null, res);
		
			}
		});
};
const tenth = (date,callback) => {
        request('https://packup-bot.herokuapp.com/r/cancelledtrains/'+date+'/48s1tado2n', function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				callback(null, res);
		
			}
		});
};
const eleventh = (date,callback) => {
        request('https://packup-bot.herokuapp.com/r/rescheduledtrains/'+date+'/48s1tado2n', function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				callback(null, res);
		
			}
		});
};



const twelth = (no,callback) => {
        request('https://packup-bot.herokuapp.com/r/trainroute/'+no+'/48s1tado2n', function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				callback(null, res);
		
			}
		});
};
const thirteen = (source,dest,date,callback) => {
        request('https://packup-bot.herokuapp.com/r/trainbetweenstations/'+source+'/'+dest+'/'+date+'/48s1tado2n', function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				callback(null, res);
		
			}
		});
};
const fourteen = (source,hours,callback) => {
        request('https://packup-bot.herokuapp.com/r/trainarrivals/'+source+'/'+hours+'/48s1tado2n', function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				callback(null, res);
		
			}
		});
};
const fifteen = (date,source,dest,no,clas,quota,callback) => {
        request('https://packup-bot.herokuapp.com/r/seatavailability/'+no+'/'+source+'/'+dest+'/'+date+'/'+clas+'/'+quota+'/48s1tado2n', function (error, response, body) {
			if (!error && response.statusCode == 200) 
			{
				console.log(body);
				var o=JSON.parse(body);
			
				var res=o.data.text;
				callback(null, res);
		
			}
		});
};



const handlers = {

    'enquiry': function(){
       
		var source=this.event.request.intent.slots.source.value;
		var destination=this.event.request.intent.slots.dest.value;
		var date=this.event.request.intent.slots.date.value;
		date=date.toString();
		date=date.replace("-","");
		date=date.replace("-","");

		
		
		first(source, destination, date, (err, res) => {
			
			this.emit(':tell', res);
		});
    },
	'specificflight': function(){
       
		var source=this.event.request.intent.slots.source.value;
		var destination=this.event.request.intent.slots.dest.value;
		var date=this.event.request.intent.slots.date.value;
		var airline=this.event.request.intent.slots.airline.value;
		var classtype=this.event.request.intent.slots.classtype.value;
		
		date=date.toString();
		date=date.replace("-","");
		date=date.replace("-","");

		
		second(source, destination, date,airline,classtype,(err, res) => {
			
			this.emit(':tell', res);
		});
    },
	'anyflight': function(){
       
		var source=this.event.request.intent.slots.source.value;
		var destination=this.event.request.intent.slots.dest.value;
		var date=this.event.request.intent.slots.date.value;
		var classtype=this.event.request.intent.slots.classtype.value;
		
		date=date.toString();
		date=date.replace("-","");
		date=date.replace("-","");

		
		third(source, destination, date,classtype,(err, res) => {
			
			this.emit(':tell', res);
		});
    },
	'nearbyfood': function(){
       
		var loc=this.event.request.intent.slots.loc.value;

		
		fourth(loc,(err, res) => {
			
			this.emit(':tell', res);
		});
    },
	'nearbynature': function(){
       
		var loc=this.event.request.intent.slots.loc.value;

		
		fifth(loc,(err, res) => {
			
			this.emit(':tell', res);
		});
    },
	'nearbyworship': function(){
       
		var loc=this.event.request.intent.slots.loc.value;

		
		sixth(loc,(err, res) => {
			
			this.emit(':tell', res);
		});
    },
	'busavailability': function(){
       
		var source=this.event.request.intent.slots.source.value;
		var dest=this.event.request.intent.slots.dest.value;
		var date=this.event.request.intent.slots.date.value;
		
		date=date.toString();
		date=date.replace("-","");
		date=date.replace("-","");

		
		seventh(source,dest,date,(err, res) => {
			
			this.emit(':tell', res);
		});
    },
	'livetrainstatus': function(){
       
		var no=this.event.request.intent.slots.no.value;
		var date=this.event.request.intent.slots.date.value;

		date=date.toString();
		var day=date.substr(date.lastIndexOf("-")+1,2);
		var month=date.substr(date.indexOf("-")+1,2);
		var year=date.substr(0,4);

		date="";
		date=date.concat(day).concat("-").concat(month).concat("-").concat(year);
		
		eighth(no,date,(err, res) => {
			
			this.emit(':tell', res);
		});
    },
	'pnrstatus': function(){
       
		var pnr=this.event.request.intent.slots.pnr.value;


		
		ninth(pnr,(err, res) => {
			
			this.emit(':tell', res);
		});
    },
	'cancelled': function(){
       
		var date=this.event.request.intent.slots.date.value;
		date=date.toString();

		var day=date.substr(date.lastIndexOf("-")+1,2);
		var month=date.substr(date.indexOf("-")+1,2);
		var year=date.substr(0,4);

		date="";
		date=date.concat(day).concat("-").concat(month).concat("-").concat(year);
		
		tenth(date,(err, res) => {
			
			this.emit(':tell', res);
		});
    },
	'rescheduled': function(){
       
		var date=this.event.request.intent.slots.date.value;

		
		date=date.toString();
		var day=date.substr(date.lastIndexOf("-")+1,2);
		var month=date.substr(date.indexOf("-")+1,2);
		var year=date.substr(0,4);

		date="";
		date=date.concat(day).concat("-").concat(month).concat("-").concat(year);

		
		eleventh(date,(err, res) => {
			
			this.emit(':tell', res);
		});
    },
	'trainroute': function(){
       
		var no=this.event.request.intent.slots.no.value;


		
		twelth(no,(err, res) => {
			
			this.emit(':tell', res);
		});
    },
	'trainbetween': function(){
       
	    var source=this.event.request.intent.slots.source.value;
	    var dest=this.event.request.intent.slots.dest.value;
		var date=this.event.request.intent.slots.date.value;

		date=date.toString();
		var day=date.substr(date.lastIndexOf("-")+1,2);
		var month=date.substr(date.indexOf("-")+1,2);
		var year=date.substr(0,4);

		date="";
		date=date.concat(day).concat("-").concat(month).concat("-").concat(year);
		
		
		
		thirteen(source,dest,date,(err, res) => {
			
			this.emit(':tell', res);
		});
    },
	'trainarrivals': function(){
       
		var source=this.event.request.intent.slots.source.value;
		var hours=this.event.request.intent.slots.hours.value;

		
		fourteen(source,hours,(err, res) => {
			
			this.emit(':tell', res);
		});
    },
	'seatavailability': function(){
       
		var date=this.event.request.intent.slots.date.value;
		var source=this.event.request.intent.slots.source.value;
		var dest=this.event.request.intent.slots.dest.value;
		var no=this.event.request.intent.slots.no.value;
		var clas=this.event.request.intent.slots.clas.value;
		var quota=this.event.request.intent.slots.quota.value;
		
		/*if(clas.indexOf("ac")!=-1)
		{
				if(clas.indexOf("second")!=-1)
				{
						clas="2A";
				}
				if(clas.indexOf("third")!=-1)
				{
						clas="3A";
				}
				if(clas.indexOf("chair")!=-1)
				{
						clas="CC";
				}
				
		
		}
		else
		{
			if(clas.indexOf("sleeper")!=-1)
				clas="SL";
			else
				clas="2S";
		}*/
		

		date=date.toString();
		var day=date.substr(date.lastIndexOf("-")+1,2);
		var month=date.substr(date.indexOf("-")+1,2);
		var year=date.substr(0,4);

		date="";
		date=date.concat(day).concat("-").concat(month).concat("-").concat(year);
		
		fifteen(date,source,dest,no,clas,quota,(err, res) => {
			
			this.emit(':tell', res);
		});
    },

    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};