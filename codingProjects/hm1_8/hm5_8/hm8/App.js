import React, { Component } from "react";
import fastXmlParser from "fast-xml-parser";

const List = props => {
  return (
    <tr>
      <td>{props.userId}</td>
      <td>{props.userFName}</td>
      <td>{props.userLName}</td>
    </tr>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xmlComplete: false,
      jsonComplete: false,
      sortComplete: false,
      userDataArr: [],
      mockUserDataArr: [
        { userId: 1, userFName: "ZZK", userLName: "Zhao" },
        { userId: 2, userFName: "Di", userLName: "Zhu" }
      ]
    };
    this.getJSONData = this.getJSONData.bind(this);
    this.getXMLData = this.getXMLData.bind(this);
  }

  getXMLData = () => {
    let xmlStr =
      "<persons><person><id>3</id><firstName>Jen</firstName><lastName>Doe</lastName></person> <person><id>6</id><firstName>Stephanie</firstName><lastName>Joe</lastName></person> <person><id>1</id><firstName>Victoria</firstName><lastName>Doe</lastName></person></persons>";
    let xmlArr = fastXmlParser.parse(xmlStr).persons.person;
    let oldStateArr = [...this.state.userDataArr, ...xmlArr];
    this.setState({
      userDataArr: oldStateArr,
      xmlComplete: true
    });
  };

  getJSONData = () => {
    let jsonStr = `{"person":[{"id":10,"firstName":"John","lastName":"Doe"},{ "id":5,"firstName":"Jack","lastName":"Doe" },{"id":7,"firstName":"James","lastName":"Doe" }]}`;
    let jsonArr = JSON.parse(jsonStr).person;
    let oldStateArr = [...this.state.userDataArr, ...jsonArr];
    this.setState({ userDataArr: oldStateArr, jsonComplete: true });
  };

  componentDidMount() {
    setTimeout(() => {
      this.getXMLData();
    }, 1000);
    setTimeout(() => {
      this.getJSONData();
    }, 2000);
    /*
    let arr = [
      { id: 0, firstName: "Zhenkang", lastName: "Zhao" },
      { id: 1, firstName: "Di", lastName: "Zhu" },
      { id: 10, firstName: "Hao", lastName: "Ai" },
      { id: 2, firstName: "Maggie", lastName: "" },
      { id: 12, firstName: "John", lastName: "Doe" }
    ];
    */
    //this.setState({ userDataArr: arr });
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate() called.");
    console.log("current props: ", this.props);
    console.log("next props: ", nextProps);
    console.log("current state: ", this.state);
    console.log("next state: ", nextState);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate() called.");
    console.log("current props: ", this.props);
    console.log("next props: ", nextProps);
    console.log("current state: ", this.state);
    console.log("next state: ", nextState);

    if (Object.keys(nextProps).length !== 0) {
      return true;
    }

    if (nextState.sortComplete) {
      return true;
    } else if (nextState.xmlComplete && nextState.jsonComplete) {
      let arr = nextState.userDataArr;
      arr.sort((obj1, obj2) => {
        return obj1.id - obj2.id;
      });

      this.setState({ userDataArr: arr, sortComplete: true });
      // console.log("arr");
      // console.log("arr length ");
      // console.log(arr.length);
      // console.log("arr data ");
      // console.log(arr.userDataArr);
      //this.setState({ userDataArr: arr, sortComplete: true });
      return false;
    } else {
      return false;
    }

    return false;
  }

  onChangeHandler = e => {
    // this.setState({ inputName: e.target.value });
  };

  onKeyPressHandler = val => {
    //console.log("on key press val : ");
    //console.log(val);
    //console.log("https://api/github.com/users/" + val);
  };

  onClickHandler = e => {
    //this.setState({ showText: "Hello " + this.state.inputText });
  };

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>UserId</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          <tr>
            <td />
            <td />
            <td />
          </tr>

          {this.state.userDataArr.map((record, index) => {
            return (
              <List
                userId={record.id}
                userFName={record.firstName}
                userLName={record.lastName}
                key={record.id}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default App;
