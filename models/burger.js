

var orm = require('../config/orm.js');

/* The following commands will run every time the app gets started.*/


module.exports = function(app){


	orm.selectAll('*', 'burgers', 'devoured', false);
		
	orm.selectAll('*', 'burgers', 'devoured', false);
        
	orm.insertOne('table', 'burgers', 'id', 'ASC');

	orm.updateOne('burgers', 'client_id', 'parties');

};

