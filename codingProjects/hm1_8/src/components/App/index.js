import React, { Component } from "react";
import List from "../List";
import ListHead from "../ListHead";
import ListBody from "../ListBody";
import SearchBar from "../SearchBar";
import Page from "../Page";
import SingleItemForm from "../SingleItemForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userArr: [
                {
                    id: 1,
                    fName: "ZZK",
                    lName: "Zhao",
                    title: "Champion",
                    sex: "Male",
                    age: "28"
                },
                {
                    id: 2,
                    fName: "Di",
                    lName: "Zhu",
                    title: "Engineer",
                    sex: "Male",
                    age: "26"
                }
            ],
            inputName: "",
            showFilterArr: false,
            filterArr: [
                {
                    id: 1,
                    fName: "ZZK",
                    lName: "Zhao",
                    title: "Champion",
                    sex: "Male",
                    age: "28"
                },
                {
                    id: 2,
                    fName: "Di",
                    lName: "Zhu",
                    title: "Engineer",
                    sex: "Male",
                    age: "26"
                }
            ],
            curUserId: 0,
            curUserMaxId: 0,
            curPageIdx: 0,
            showRowsNumPerPage: 5,
            newUser: {},
            editingNewUser: false,
            mockUserDataArr: []
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
        this.onClickPrePageHandler = this.onClickPrePageHandler.bind(this);
        this.onClickNextPageHandler = this.onClickNextPageHandler.bind(this);
    }

    componentDidMount() {}

    onChangeHandler = e => {
        this.setState({ inputName: e.target.value });
    };

    onKeyPressHandler = e => {
        if (e.key === "Enter") {
            e.preventDefault();
            console.log("Press Enter!");
            console.log(this.state.inputName);
            // start search from here!!!
        }
    };

    onClickHandler = e => {
        //this.setState({ showText: "Hello " + this.state.inputText });
    };

    formSubmitHandler = id => {
        //  add new user
        //if (this.state.editingNewUser) {
        //this.setState({ userArr: [...this.state.userArr[id]], newUsr, ...this.state.userArr[]});
        // } else {
        //  edit user
        // }
    };

    onClickPrePageHandler = e => {};

    onClickNextPageHandler = e => {};

    render() {
        return (
            <div>
                <SearchBar />
                <List />
                <SingleItemForm />
                <Page />
            </div>
        );
    }
}

export default App;

/*
          filter={this.state.showFilterArr}
          usersArr={this.state.filterArr}


          onSubmitHandler={this.state.formSubmitHandler}
          user={this.state.userArr[0]}
*/
