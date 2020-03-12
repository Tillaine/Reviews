const mysql = require('mysql')
// ***********************************
// db Connection
// ***********************************
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    database: 'moves_db'
});

connection.connect(function (err) {
    if(err){
        if(err) {
            console.log('database err', err);
        } else {
            console.log('moves_db connected')
        }
    }
});

getSomeReviews = () => {
    connection.query()
}

module.exports = { connection }