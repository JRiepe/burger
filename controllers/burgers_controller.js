
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');



// ===============================================================================
// api-routes


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	
	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	app.post('/api/', function(req, res){

		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table 
		if(tableData.length < 5 ){
			tableData.push(req.body);
			res.json(true); // KEY LINE
		}

		// Or false if they don't have a table
		else{
			waitListData.push(req.body);
			res.json(false); // KEY LINE
		}

	});

	// ---------------------------------------------------------------------------
	

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// html-routes

//////////////////////////////////////////////////////////////////////////////////////////




	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------
app.get('/', function (req, res) {
    connection.query('SELECT * FROM burgers', function(err, result) { 
        if (err) throw err; // include to show where db error is
        res.render('index', {
            quotes: result
        }); // 2nd function always an object // end res.render
    }); // end connection.query
    
}); // end  app.get

app.get('/index', function (req, res) {
    connection.query('SELECT * FROM burgers WHERE devoured = false', function(err, result) { 
        if (err) throw err; // include to show where db error is
        res.render('index', {
            burger: result
        }); // 2nd function always an object // end res.render
    }); // end connection.query
    
    connection.query('SELECT * FROM burgers WHERE devoured = true', function(err, result) { 
        if (err) throw err; // include to show where db error is
        res.render('index', {
            devour: result
        }); // 2nd function always an object // end res.render
    }); // end connection.query



}); // end  app.get



app.get('/devour/:ident', function (req, res) {
    connection.query('SELECT * FROM quotes WHERE id = ident', function(err, result) {
        if (err) throw err;
        res.render('index', {
            quotes: result
        }); // end res.render
    }); // end connection.query
}); // end  app.get


	app.get('/devour/:id', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/reserve.html'));
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../views/index.handlebars'));
	});

}
