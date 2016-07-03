var orm = require('./config/orm.js');

/* The following commands will run every time the app gets started.*/

//Find all the pets ordering by the lowest price to the highest price
//JUST FOR YOUR REFERENCE: selectAndOrder(whatToSelect, table, orderCol, orderBy)
orm.selectAndOrder('*', 'parties', 'party_cost', 'DESC');
console.log('SELECT * FROM parties ORDERBY part_cost DESC')

//the above query does this:
//SELECT * FROM pets ORDER BY price DESC;

//Find a pet in the pets table by an animal_name of Rachel
//JUST FOR YOUR REFERENCE: selectWhere(tableInput, colToSearch, valOfCol)
orm.selectAndOrder('*', 'parties', 'party_name', 'ASC');
console.log('SELECT * FROM parties ORDERBY part_name ASC')
//the above query does this:
//SELECT * FROM pets WHERE animal_name = Rachel;

//Find the buyer with the most pets
//JUST FOR YOUR REFERENCE: findWhoHasMost(tableOneCol, tableTwoForeignKey, tableOne, tableTwo)
orm.findWhoHasMost('id', 'client_id', 'parties', 'clients');
console.log("SELECT * FROM parties")

//the above query does this:
/*
SELECT buyer_name, COUNT(buyer_name) AS count
FROM buyers
LEFT JOIN pets ON pets.buyer_id = buyers.id
GROUP BY buyer_name
ORDER BY count desc
LIMIT 1
*/
