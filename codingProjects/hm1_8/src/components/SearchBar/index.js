import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  onChangeHandler = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <input
        type="text"
        onChangeHandler={this.onChangeHandler}
        text={this.state.text}
      />
    );
  }
}

export default SearchBar;
