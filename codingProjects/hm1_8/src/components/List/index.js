import React, { Component } from "react";
import ListHead from "../ListHead";
import ListBody from "../ListBody";

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table responsive>
                <ListHead />
                <ListBody />
                <Page />
            </Table>
        );
    }
}

export default List;
