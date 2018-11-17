import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants addReview={this.props.addReview} deleteRestaurant={this.props.deleteRestaurant} restaurants={this.props.restaurants} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (text) => dispatch({type: 'ADD_RESTAURANT', text: text}),
    deleteRestaurant: (id) => dispatch({type: 'DELETE_RESTAURANT', id: id}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
