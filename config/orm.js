var connection = require('../config/connection.js');

// object relational mapper (ORM)

var orm = {
    selectAll: function(tableSelected) {
        var queryString = 'SELECT * FROM burgers;'; // + tableSelected;
        console.log('query selectAll: '+ queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            return result;

        });
    },
    insertOne: function(burgName) {
        var queryString = 'INSERT INTO burgers (burger_name, devoured, date) VALUES (?, false, now(), [' + req.body.burgName + ']);';
        console.log('query insert: '+ queryString);
        connection.query(queryString, function(err, result) {
            return result;
        });
    },
    updateOne: function(valKey) {
        var queryString = 'UPDATE burgers SET devoured = true WHERE id = ?' + '[' + valKey + ']' +';';
        console.log('query update: '+ queryString);
        connection.query(queryString, function(err, result) {
            return result;
          
        });
    },
    
};

module.exports = orm;

//  `selectAll()`, `insertOne()`, `updateOne()`