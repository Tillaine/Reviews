import React from 'react';
import Review from './Review.jsx'
import PageButton from './PageButton.jsx'
import images from './imgFiles'
let setNum = 0;

var randomImage = () => images.imageIds[Math.floor(Math.random() * images.imageIds.length)];
class ReviewList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            page: 1,
            lastPage: 1
        }
        this.handlePageClick = this.handlePageClick.bind(this)
        this.handlePageBack = this.handlePageBack.bind(this)
    }

    handlePageClick (e) {
        console.log(e.target.id)
        if (e.target.id === 'next') {
            if(this.state.page < setNum)
              this.setState({page: this.state.page + 1})
            
            
        } else{
            this.setState({
                lastPage: this.state.page,
                page: Number(e.target.value)})
        }

    }

    handlePageBack (e) {
      if (this.state.page > 1 ){
          this.setState({page: this.state.page -1 })
      }
    }
        

    render() {
        const reviewSets = splitReviews(this.props.reviews)
        
        return (
        <div>
    
        <ul>
        {reviewSets[this.state.page -1].map(review =>{ 
            const { id } = review
            return <Review key={id} imageId={randomImage()} review={review}/>
            })}
    </ul>
    {/* Page Navigation */}
    <div className='reviewNav'> 
            <ul className='pagination'>
                <li className='pageLi'>
                <button onClick={this.handlePageBack}  className='pageButton' id='back' > ⬅  </button>
                </li>
                {
                    reviewSets.map((review, i) => {
                        return (
                            <PageButton 
                            pageNumber={i +1}
                            handlePageClick={this.handlePageClick}
                            />
                        )
                    })
                    }
                <li className='pageLi'>
                <button onClick={this.handlePageClick}  className='pageButton' id='next'> ➡ </button>
                
                </li>
            </ul>
    
    </div>
        </div>
    )
    }
} 

const splitReviews = (reviews) => {
    const tempReviews = reviews.slice();
    const reviewSets = []

    while (tempReviews.length > 5){
        reviewSets.push(tempReviews.splice(0, 5))
    }
    reviewSets.push(tempReviews)
    setNum = reviewSets.length;
    return reviewSets
}

export default ReviewList;