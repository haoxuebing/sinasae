var mysql = require('mysql');


function queryMySQL(sql, callback) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'hao12345',
        database: 'myweb'
    });
    connection.connect();
    connection.query(sql, function(error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', JSON.stringify(results));
        callback(error, results);
    });
    connection.end();
}

exports.query = queryMySQL;

// module.exports = {
//     queryMySQL: queryMySQL
// }