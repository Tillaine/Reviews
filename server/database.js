const mysql = require('mysql')
// ***********************************
// db Connection
// ***********************************
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    database: 'reviews_db'
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

getSomeReviews = (amountOfreviews) => {
    const queryString = `SELECT * FROM reviews WHERE id < ${amountOfreviews + 1}`
    return new Promise((resolve, reject) => {
        connection.query(queryString, (err, reviews) => {
            if (err) { reject(err) }
            else { resolve(reviews) }
        })

    })
}

module.exports = { connection, getSomeReviews }