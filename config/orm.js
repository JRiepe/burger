var connection = require('../config/connection.js');

// object relational mapper (ORM)

var orm = {
    selectAll: function(tableSelected) {
        var queryString = 'SELECT * FROM ' + tableSelected;
        connection.query(queryString, function(err, result) {
            console.log(result);       
        });
    },
    insertOne: function(tableToInsert, burgName) {
        var queryString = 'INSERT INTO ' + tableToInsert + ' (burger_name, devoured, date) VALUES (' + burgName + ', false, now())';
        //console.log(queryString)
        connection.query(queryString, function(err, result) {
            //console.log(result);
        });
    },
    updateOne: function(tableToUpdate, valKey) {
        var queryString = 'UPDATE ' + tableToUpdate + ' SET devoured = false WHERE id = ?';
        connection.query(queryString, [valKey], function(err, result) {
            //console.log(result);
        });
    }
};

module.exports = orm;

//  `selectAll()`, `insertOne()`, `updateOne()`