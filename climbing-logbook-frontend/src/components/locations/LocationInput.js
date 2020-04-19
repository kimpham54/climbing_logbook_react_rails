import React from 'react';

class LocationInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  };


  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }


  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addLocation(this.state.text)
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default LocationInput;
