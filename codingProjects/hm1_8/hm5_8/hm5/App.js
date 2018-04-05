import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';


function InputField(props) {
  return <input type="text" value={props.text} onChange={props.onChangeHandler} />;
}

function TextArea(props) {
  return <textarea value={props.text} />;
}


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputNum: '',
      convertedNum: '',
      OrdinalArr: ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"],
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.convertToOrdinalNumString = this.convertToOrdinalNumString.bind(this);
  }

  convertToOrdinalNumString = (num) => {
    let res = parseInt(num, 10);
    let tail = " ";

    if (!isNaN(res)) {
      tail = res === 0 ? " ": this.state.OrdinalArr[res % 10];
    }

    return num + tail;
  }

  onChangeHandler = (e) => {
    //  get cur val  string to int.  if number : parseInt() not : just show.
    //  convert cur val
    //this.setState({ inputText: e.target.value });
    let odNum = this.convertToOrdinalNumString(e.target.value);
    console.log("odNum");
    console.log(odNum);
    this.setState({ inputNum: e.target.value, convertedNum: odNum });
  }

  render() {
    return (
      <div>
        <InputField text={this.state.inputNum} onChangeHandler={this.onChangeHandler} />
        <br/>
        <TextArea text={this.state.convertedNum} />
      </div>
    );
  }
}

export default App;
