import React, { Component } from 'react';
import Reviews from './Reviews';
import { connect } from 'react-redux';

class ReviewInput extends Component {
  state={
    content: '',
    restaurantID: ''
  }

  handleChange = event => {
    let restID = event.target.parentElement.parentElement.id;

    this.setState({
      content: event.target.value,
      restaurantID: restID
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.addReview(this.state)

    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div id={this.props.restaurant.id}>
        <form onSubmit={this.handleSubmit}>
          <label>Add Review: </label>
          <input
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
            />
          <p>
            <input type="submit"/>
          </p>
      </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => {dispatch({type: "ADD_REVIEW", payload: review})}
  }
}

export default connect(null, mapDispatchToProps)(ReviewInput);
