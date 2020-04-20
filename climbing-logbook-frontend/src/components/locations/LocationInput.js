import React, { Component } from 'react';

class LocationInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      placename: '',
      coordinates:'',
      country:'',
      city:'',
      image:'',
      climbs_total:''
    };
  };


  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      // text: event.target.value,
    });
  }


  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addLocation(this.state)
    this.setState({
      placename: '',
      coordinates:'',
      country:'',
      city:'',
      image:'',
      climbs_total:''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <label>placename</label>
          <input
            type="text"
            value={this.state.placename}
            placeholder="placename"
            name="placename"
            onChange={(event) => this.handleOnChange(event)} />

          <br/>
        <label>coordinates</label>
          <input
            type="text"
            value={this.state.coordinates}
            placeholder="coordinates"
            name="coordinates"
            onChange={(event) => this.handleOnChange(event)} />

          <br/>
          <label>country</label>
          <input
            type="text"
            value={this.state.country}
            placeholder="country"
            name="country"
            onChange={(event) => this.handleOnChange(event)} />

          <br/>
          <label>city</label>
          <input
            type="text"
            value={this.state.city}
            placeholder="city"
            name="city"
            onChange={(event) => this.handleOnChange(event)} />

          <br/>
          <label>image</label>
          <input
            type="text"
            value={this.state.image}
            placeholder="image"
            name="image"
            onChange={(event) => this.handleOnChange(event)} />

          <br/>
          <label>climbs_total</label>
          <input
            type="text"
            value={this.state.climbs_total}
            placeholder="climbs_total"
            name="climbs_total"
            onChange={(event) => this.handleOnChange(event)} />

          <br/>

          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default LocationInput;
