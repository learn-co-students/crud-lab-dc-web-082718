import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestaurantInput extends Component {
  state={
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.addRestaurant(this.state.text);

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Restaurant: </label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
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
    addRestaurant: (restaurant) => {dispatch({type: "ADD_RESTAURANT", payload: restaurant})}
  }
}

export default connect(null, mapDispatchToProps)(RestaurantInput);
