import React, { Component } from "react";

class SingleItemForm extends Component {
  constructor(props) {
    super(props);
    console.log("SingleItemForm");
  }

  onSubmitID = e => {
    return this.props.onSubmitHandler(this.props.id);
  };

  textFieldOnChangeHandler = e => {};

  render() {
    return (
      <form onSubmit={this.onSubmitID}>
        First Name:{"  "}
        <input
          type="text"
          //   text={this.props.user.fName}
          onChangeHandler={() => {}}
        />
        Last Name:{"  "}
        <input
          type="text"
          //   text={this.props.user.lName}
          onChangeHandler={() => {}}
        />
        Title:{"  "}
        <input
          type="text"
          //   text={this.props.user.title}
          onChangeHandler={() => {}}
        />
        Sex:{"  "}
        <input
          type="text"
          //   text={this.props.user.sex}
          onChangeHandler={() => {}}
        />
        Age:{"  "}
        <input
          type="text"
          //   text={this.props.user.age}
          onChangeHandler={() => {}}
        />
        Password:{"  "}
        <input
          type="text"
          //   text={this.props.user.password}
          onChangeHandler={() => {}}
        />
        Repeat:{"  "}
        <input
          type="text"
          /*text={this.props.user.repeat}*/
          onChangeHandler={() => {}}
        />
        <input type="submit" text="Submit" onChangeHandler={() => {}} />
      </form>
    );
  }
}

export default SingleItemForm;
