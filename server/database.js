const mysql = require('mysql')
// ***********************************
// db Connection
// ***********************************
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    database: 'reviews_db'
});

// database connection 
connection.connect(function (err) {
    if(err){
        if(err) {
            console.log('database err', err);
        } else {
            console.log('moves_db connected')
        }
    }
});

//get a given number of reviews 
getSomeReviews = (amountOfreviews) => {
    const queryString = `SELECT * FROM reviews WHERE id < ${amountOfreviews + 1}`
    return new Promise((resolve, reject) => {
        connection.query(queryString, (err, reviews) => {
            if (err) { reject(err) }
            else { resolve(reviews) }
        })

    })
}

//get reviews that include search term 

getRelevantReviews = (searchTerm) => {
    
}

module.exports = { connection, getSomeReviews }