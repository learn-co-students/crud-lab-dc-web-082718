import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.text}/>
        <input type="submit"/>
      </form>
    );
  }
};

export default ReviewInput;
