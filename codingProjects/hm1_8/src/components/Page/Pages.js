import React, { Component } from "react";
import Button from "./Button";
class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonList: [] };

    console.log("Pages");
    console.log(this.props.pageNum);
  }

  componentDidMount() {
    let pages = 0;
    let buttonListArr = [];
    while (pages !== this.props.pageNum) {
      buttonListArr.push(<Button text={pages + 1} />);
      pages++;
    }
    this.setState({ buttonList: buttonListArr });
  }

  render() {
    return <div>{this.state.buttonList}</div>;
  }
}

export default Pages;
