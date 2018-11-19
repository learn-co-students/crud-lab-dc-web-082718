import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
          <br></br>
          <ReviewInput restaurant={this.props.restaurant}/>
          <Reviews />
      </div>
    )
  }
}

export default ReviewsContainer
