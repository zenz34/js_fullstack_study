import React, { Component } from "react";
import { Route } from "react-router-dom";
import BookList from "./BookList";
import BookSearch from "./BookSearch";

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={BookList} />
                <Route path="/search" component={BookSearch} />
            </div>
        );
    }
}

export default App;
