import React, { Component } from "react";
import { Route } from "react-router-dom";
import BookList from "./BookList";
import BookSearch from "./BookSearch";
import "./App.css";
class App extends Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" component={BookList} />
                <Route path="/search" component={BookSearch} />
            </div>
        );
    }
}

export default App;
