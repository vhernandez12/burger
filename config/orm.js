var connection = require('./connection.js');

function objToSql(ob) {

    var arr = [];

    for (var key in ob) {
        if (ob.hasOwnPropert(key)) {
            arr.push(key + '=' + ob[key]);
        }
    }

    return arr.toString();
}

var orm = {
    selectAll: function (table, cb) {
        var queryString = 'SELECT * FROM' + table + ';';
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);

        })
    }, 
    insertOne: function (table, burger_name, cb) {
        var queryString = "INSERT INTO" + table + " (burger_name)"
    }
}