import React, { Component } from "react";
import ListHead from "../ListHead";
import ListBody from "../ListBody";

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ListHead />
                <ListBody />
            </div>
        );
    }
}

export default List;
