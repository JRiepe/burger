
var express = require('express');
//var methodOverride = require('method-override');
//var bodyParser = require('body-parser');
var connection = require('../config/connection.js');
//var path = require('path');
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
	 		
			orm.selectAll('burgers', function(result){
				//if (err) throw err;
		            res.render('index', {
		            	burgers: result
		            });
			});

	 		//connection.query('SELECT * FROM burgers', function(err, result) {
    }); // end app.get


	

//////////////////////////////////////////////////////////////////////////////////////////

// api-routes

//////////////////////////////////////////////////////////////////////////////////////////


	app.post('/update/:id', function (req, res) {
		    //connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [true, req.params.id]);            
            orm.updateOne('burgers', 'devoured', req.params.id,  function(result){
            	res.redirect('/index');
 			});
    });// end  app.post (update)
		    		
	
	app.post('/create', function (req, res) {
		    
		    console.log('burgername: ' + req.body.burgName);
		    //connection.query('INSERT INTO burgers (burger_name, devoured, date) VALUES (?, false, now())', [req.body.burgName]);
		    orm.insertOne('burgers', req.body.burgName, function(result){			    
			    res.redirect('/index'); 
		    });
	}); // end  app.post (create)


}; // end module.exports
