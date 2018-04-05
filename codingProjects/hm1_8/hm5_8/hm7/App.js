import React, { Component } from "react";
import axios from "axios";
// import logo from './logo.svg';
// import './App.css';
/*

App:  container
  view
    Form
      InputField text type
    profile list
      ul
        li /li
      /ul
    repos list
      ul
        li /li
      /ul

  state
    inputName
    user profile data.  object   == >   profile list
    user repos data. array  == >  repos list


  methods
    onKeyPressHandler:
      1 get the user name from input field once enter key was pressed
        ! Don't need it actually
        better to have it, since the setState is async.
      2 then send two async request
      get user's profile
      get user's repos
      3 when any of them is done
      render the finished one     by calling this.setState....

    onChangeXXXHandler:
      get the username
      to display the username


Form function component
  form props.onChangeXXXHandler
    InputField
    onKeyPress
    give the state back to App
    <onKeyPress={props.onKeyPressHandler}
    
  /form


inputfield  function component
  onChange={props.onChangeXXX}

ProfileList  function component
  <ul>
    for loop to iterate one object
    <li>{key}{value}</li>
  </ul>



repos list:
  <ul>
    object array []
    iterate the array, show key part of the properties
    arr.map(
      return <li>xxxxxx</li>
    );
  </ul>

*/

const Form = props => {
  return (
    <form
      onKeyPress={e => {
        if (e.key === "Enter") {
          e.preventDefault();
          return props.onKeyH(props.textVal);
        }
      }}
    >
      <InputField onChag={props.onChag} textVal={props.textVal} />
    </form>
  );
};

const InputField = props => {
  return <input type="text" value={props.textVal} onChange={props.onChag} />;
};

const ProfileList = props => {
  let profileObj = props.profile;
  let userInfo = Object.keys(profileObj).map(key => {
    if (key === "owner" || key === "license") {
      if (profileObj[key] === null) {
        return;
      }
      return <ProfileList profile={profileObj[key]} />;
    } else {
      return (
        <li>
          {key}:
          {"                "}
          {profileObj[key]}
        </li>
      );
    }
  });

  return (
    <ul style={{ listStyleType: "none" }}>
      <li />
      {userInfo}
    </ul>
  );
};

const ReposList = props => {
  let reposArr = props.repos;
  let reposLi = reposArr.map(obj => {
    return <ProfileList profile={obj} key={obj.id} />;
  });

  return <div>{reposLi}</div>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      userProfile: {},
      userRepos: []
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler = e => {
    this.setState({ inputName: e.target.value });
  };

  onKeyPressHandler = val => {
    https: axios({
      method: "get",
      url: "https://api.github.com/users/" + val
    })
      .then(response => {
        this.setState({ userProfile: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    https: axios({
      method: "get",
      url: "https://api.github.com/users/" + val + "/repos"
    })
      .then(response => {
        this.setState({ userRepos: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onClickHandler = e => {
    this.setState({ showText: "Hello " + this.state.inputText });
  };

  render() {
    return (
      <div>
        <Form
          onChag={this.onChangeHandler}
          onKeyH={this.onKeyPressHandler}
          textVal={this.state.inputName}
        />
        <div>
          <ProfileList profile={this.state.userProfile} />
        </div>
        <p>
          ********************************************************************************
        </p>
        <div>
          <ReposList repos={this.state.userRepos} />
        </div>
      </div>
    );
  }
}

export default App;
