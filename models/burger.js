var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


//var orm = require('../config/orm.js');

/* The following commands will run every time the app gets started.*/
module.exports = function(app){


function selectAll() {
	orm.selectAll('*', 'burgers', 'id', 'ASC');
	if (err) throw err; 
	res.render('index', {
            burger: result
        }); // 2nd function al
	//console.log('SELECT * FROM burgers ORDERBY id ASC');
};

//the above query does this:
//SELECT * FROM BURGERS ORDER BY id DESC;

//Find a pet in the pets table by an animal_name of Rachel
//JUST FOR YOUR REFERENCE: selectWhere(tableInput, colToSearch, valOfCol)
function insertOne() {
	orm.insertOne('table', 'burgers', 'id', 'ASC');
};
//console.log('INSERT INTO burgers (burger_name, devoured, date) VALUES ()');
//the above query does this:
//SELECT * FROM pets WHERE animal_name = Rachel;

//Find the buyer with the most pets
//JUST FOR YOUR REFERENCE: findWhoHasMost(tableOneCol, tableTwoForeignKey, tableOne, tableTwo)
function updateOne() {
	orm.updateOne('burgers', 'client_id', 'parties');
	//console.log("UPDATE burgers SET devoured = true WHERE id = ident ")
}
//the above query does this:
/*
SELECT buyer_name, COUNT(buyer_name) AS count
FROM buyers
LEFT JOIN pets ON pets.buyer_id = buyers.id
GROUP BY buyer_name
ORDER BY count desc
LIMIT 1
*/

};

