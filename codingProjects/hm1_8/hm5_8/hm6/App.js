import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';


const InputField = (props) => {
  return <input type="text" value={props.text} onChange={props.onChangeHandler} />;
}

const TextArea = (props) => {
  return <div> {props.text} </div>;
}

const Button = (props) => {
  return <button onClick={props.clickHandler}>Show</button>;
}


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputText: '',
      showText: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler = (e) => {
    this.setState({ inputText: e.target.value });
  }

  onClickHandler = (e) => {
    this.setState({ showText: "Hello " + this.state.inputText });
  }

  render() {
    return (
      <div>
        <InputField text={this.state.inputText} onChangeHandler={this.onChangeHandler} />
        <Button clickHandler={this.onClickHandler} />
        <br/>
        <br/>
        <TextArea text={this.state.showText} />
      </div>
    );
  }
}

export default App;
