import React, { Component } from 'react';

class Route extends Component {


  handleOnClick = () => {
    this.props.deleteRoute(this.props.route.id)
  }

  render() {
    return (
      <div> 
        <li>
          {this.props.route.location_id}
        </li>
        <li>
          {this.props.route.name}
        </li>
        <li>
          {this.props.route.grade}
        </li>
        <li>
          {this.props.route.climbing_type}
        </li>
        <li>
          {this.props.route.notes}
        </li>
        <li>
          {this.props.route.climb_date}
        </li>
        <li>
          {this.props.route.image}
        </li>
        <li>
          {this.props.route.url}
        </li>
        <li>
          {this.props.route.times_climbed}
        </li>
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }

};

export default Route;
