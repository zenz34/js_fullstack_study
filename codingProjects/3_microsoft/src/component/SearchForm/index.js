import React, { Component } from "react";

class SearchForm extends Component {
    render() {
        return (
            <div>
                <p>City:</p>
                <input type="text" />
                <p>Zip Code:</p>
                <input type="text" />
            </div>
        );
    }
}

export default SearchForm;
