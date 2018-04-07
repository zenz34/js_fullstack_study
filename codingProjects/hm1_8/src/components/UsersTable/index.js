import React, { Component } from "react";
import TableHead from "../TableHead";
import TableBody from "../TableBody";
import { Table } from "reactstrap";
import Page from "../Page";

class UsersTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Table responsive>
                    <TableHead />
                    <TableBody />
                </Table>
                <Page />
            </div>
        );
    }
}

export default UsersTable;
