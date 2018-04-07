import React, { Component } from "react";
import InputField from "./InputField";

//  !!should have a state to lable if now the data is empty

class UserInfoForm extends Component {
  constructor(props) {
    super(props);

    console.log("UserInfoForm");

    if (this.props.user === null || Object.keys(this.props.user).length === 0) {
      console.log("user is null or user is an empty object!");
    }

    this.onSubmitID = this.onSubmitID.bind(this);
  }

  onSubmitID = e => {
    return this.props.onSubmitHandler(this.props.id);
  };

  textFieldOnChangeHandler = e => {
    //this.setState({ text: });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitID}>
        <InputField
          type="text"
          text={this.props.user.fName}
          onChangeHandler={() => {}}
        />
        <InputField
          type="text"
          text={this.props.user.lName}
          onChangeHandler={() => {}}
        />
        <InputField
          type="text"
          text={this.props.user.title}
          onChangeHandler={() => {}}
        />
        <InputField
          type="text"
          text={this.props.user.sex}
          onChangeHandler={() => {}}
        />
        <InputField
          type="text"
          text={this.props.user.age}
          onChangeHandler={() => {}}
        />
        <InputField type="submit" text="Submit" onChangeHandler={() => {}} />
      </form>
    );
  }
}

export default UserInfoForm;
