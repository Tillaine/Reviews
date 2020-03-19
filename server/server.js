const express =  require('express');
const morgan = require('morgan');
const Port = 3000;
const db = require('./database').connection
const { getSomeReviews } = require('./database')
const { getRelevantReviews  } = require('./database')
const {getRatingData} = require('./ratings')

// creating server 
const app = express();

// ***********************************
// middleware
// ***********************************
// logging requests 
app.use(morgan('dev'))
//turning requests into json
app.use(express.json());
//



// ***********************************
// routes 
// ***********************************
// send static files to client
app.use(express.static('./client/dist'))


//get reviews based on search term 
app.get('/api/search', (req, res) => {
   const reviewsWithRatings = {}
   getRelevantReviews(req.query.term)
   .then(reviews => {
      reviewsWithRatings.reviews = reviews;
      reviewsWithRatings.ratings = getRatingData(reviews)
      res.send(reviewsWithRatings)
   }) 
   .catch(err => console.log(err))
})

// get ten reviews 
app.get('/api/reviews', (req, res) => {
const reviewsWithRatings = {}
   getSomeReviews(10)
   .then(reviews => {
      reviewsWithRatings.reviews = reviews;
      reviewsWithRatings.ratings = getRatingData(reviews)
      // console.log(getRatingData(reviews))
      return reviewsWithRatings
   }) 
   .then(reviewsWithRatings => {
      console.log(reviewsWithRatings)
   })
   .catch(err => console.log(err))
})


app.listen(Port)