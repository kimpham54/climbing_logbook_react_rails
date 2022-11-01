import React, { Component } from 'react';

class RouteInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      location_id: this.props.routelocationId,
      name: '',
      grade: '',
      climbing_type: '',
      notes: '',
      climb_date: '',
      image: '',
      url: '',
      times_climbed: ''
    };
  };


  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      // text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    console.log(this.props)
    event.preventDefault();
    this.props.addRoute(this.state)
    this.setState({
      location_id: this.props.routelocationId,
      name: '',
      grade: '',
      climbing_type: '',
      notes: '',
      climb_date: '',
      image: '',
      url: '',
      times_climbed: ''
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >

          <input
            type="text"
            value={this.state.name}
            placeholder="name"
            name="name"
            onChange={(event) => this.handleOnChange(event)} />
          <input
            type="text"
            value={this.state.grade}
            placeholder="grade"
            name="grade"
            onChange={(event) => this.handleOnChange(event)} />
          <input
            type="text"
            value={this.state.climbing_type}
            placeholder="climbing type"
            name="climbing_type"
            onChange={(event) => this.handleOnChange(event)} />
          <input
            type="text"
            value={this.state.notes}
            placeholder="notes"
            name="notes"
            onChange={(event) => this.handleOnChange(event)} />
          <input
            type="text"
            value={this.state.climb_date}
            placeholder="climb date"
            name="climb_date"
            onChange={(event) => this.handleOnChange(event)} />
          <input
            type="text"
            value={this.state.image}
            placeholder="image url"
            name="image"
            onChange={(event) => this.handleOnChange(event)} />
          <input
            type="url"
            value={this.state.url}
            placeholder="url"
            name="url"
            onChange={(event) => this.handleOnChange(event)} />
          <input
            type="number"
            value={this.state.times_climbed}
            placeholder="times climbed"
            name="times_climbed"
            onChange={(event) => this.handleOnChange(event)} />

          <button>Submit</button>


        </form>
      </div>
    );
  }
};

export default RouteInput;
