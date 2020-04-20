import React, { Component } from 'react';

class RouteInput extends Component {

  state = {
    location_id: '',
    name:'',
    grade:'',
    climbing_type:'',
    notes:'',
    climb_date:'',
    image:'',
    url:'',
    times_climbed:''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRoute(this.state);
    this.setState({
      location_id: '',
      name:'',
      grade:'',
      climbing_type:'',
      notes:'',
      climb_date:'',
      image:'',
      url:'',
      times_climbed:''
    });
  }

  render() {
    return (
     <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>Add Route</label>
          🌸<input
            type="text"
            value={this.state.location_id}
            onChange={this.handleOnChange} />
          🌸<input
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange} />
          🌸<input
            type="text"
            value={this.state.grade}
            onChange={this.handleOnChange} />
          <input
            type="text"
            value={this.state.climbing_type}
            onChange={this.handleOnChange} />
          <input
            type="text"
            value={this.state.notes}
            onChange={this.handleOnChange} />
          <input
            type="text"
            value={this.state.climb_date}
            onChange={this.handleOnChange} />
          <input
            type="text"
            value={this.state.image}
            onChange={this.handleOnChange} />
          <input
            type="url"
            value={this.state.url}
            onChange={this.handleOnChange} />
          <input
            type="number"
            value={this.state.times_climbed}
            onChange={this.handleOnChange} />
          <input type="submit" />

        </form>
      </div>
    );
  }
};

export default RouteInput;
