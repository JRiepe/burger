
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var connection = require('../config/connection.js');
var path = require('path');
var orm = require('../config/orm.js');
// ===============================================================================
// ROUTING
// ===============================================================================


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
	 	
	    	orm.selectAll('burgers', function(res) {
	    		
	    		res.render('index', {	            
		           burgers: res
		        }); //  end res.render
	    	});   
		        	
	           
	}); // end  app.get



	app.use(function(req, res){
			orm.selectAll('burgers');
	        
	        res.render('index', {	       
	            burgers: res,
	            
	        }); // 2nd function always an object // end res.render	   
	}); // end  app.use

//////////////////////////////////////////////////////////////////////////////////////////

// api-routes

//////////////////////////////////////////////////////////////////////////////////////////


	app.put('/api/devours/:ident', function (req, res) {
		    orm.updateOne('burgers', ident);		
		    res.redirect('/index'); 
	}); // end  app.post
	
	app.post('/api/addBurger', function (req, res) {
	    orm.insertOne('burgers', 'addedBurger');
	    res.redirect('/index'); 
	}); // end  app.post


}; // end module.exports
