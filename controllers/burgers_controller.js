
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var connection = require('../config/connection.js');



// ===============================================================================
// api-routes


// ===============================================================================
// ROUTING
// ===============================================================================
var orm = require('../config/orm.js');

module.exports = function(app){


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// html-routes

//////////////////////////////////////////////////////////////////////////////////////////

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------
	app.get('/index', function (req, res) {
	 	
	    	orm.selectAll('burgers');
	        //if (err) throw err; // include to show where db error is
	        res.render('index', {	            
	            burger: res,
	            devour: res
	        }); // 2nd function always an object // end res.render	   
	}); // end  app.get



	app.use(function(req, res){
			orm.selectAll('burgers');
	        //if (err) throw err; // include to show where db error is
	        res.render('index', {	       
	            burger: res,
	            devour: res
	        }); // 2nd function always an object // end res.render	   
	}); // end  app.use

//////////////////////////////////////////////////////////////////////////////////////////

// api-routes

//////////////////////////////////////////////////////////////////////////////////////////


	app.get('/api/devours/:ident', function (req, res) {
		    orm.updateOne('burgers', ident)
			//if (err) throw err;
		    orm.selectAll('burgers');
	        //if (err) throw err; // include to show where db error is
	        res.render('index', {	            
	            burger: res,
	            devour: res
	        }); // 2nd function always an object // end res.render	 
	}); // end  app.post
	
	app.get('/api/addBurger', function (req, res) {
	    orm.insertOne('burgers', 'addedBurger')
		//if (err) throw err;
	    var result = orm.selectAll('burgers');
	        //if (err) throw err; // include to show where db error is
	        res.render('index', {
	           	burger: res,
	            devour: res
	        }); // 2nd function always an object // end res.render	 
	}); // end  app.post


}; // end module.exports
