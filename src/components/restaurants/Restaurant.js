import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import { connect } from 'react-redux';

class Restaurant extends Component {

  handleDelete = (event) => {
    event.persist()
    let restaurantID = event.target.id;

    this.props.delete(restaurantID);
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.name}
          <button
            onClick={this.handleDelete}
            id={restaurant.id}
            >
             X
          </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    delete: restaurantID => {dispatch({type: "DELETE_RESTAURANT", payload: restaurantID})}
  }
}

export default connect(null, mapDispatchToProps)(Restaurant);
