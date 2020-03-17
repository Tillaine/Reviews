const {getSomeReviews} = require('./database');



const getRatingData = (newReviews) => {
    const ratingSum = {};
    
    newReviews.forEach(review => {
        for(let category in review) {
            if(category.includes('rating')){
                if(ratingSum[category] === undefined) {
                    ratingSum[category] = {all: [review[category]]};
                } else {
                    ratingSum[category].all.push(review[category]) 
                }
            }
    }
    })
    const rateSumArray = Object.keys(ratingSum).map(category => {
        const avg = (ratingSum[category].all.reduce((total, num) => 
        total + num)/ratingSum[category].all.length).toFixed(1);
        ratingSum[category].sum = avg;
        return avg
    })
    
    const AvgRating = (rateSumArray.reduce((total, rate) => { 
        return Number(total) + Number(rate)})/rateSumArray.length).toFixed(1)
        return { AvgRating, ratingSum}

}



module.exports = {getRatingData}