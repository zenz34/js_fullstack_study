import React, { Component } from "react";

class TableHead extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <thead>
                <tr>
                    <th>Edit</th>
                    <th>
                        <button onClick={this.props.fNameSortUsersHandler}>
                            First Name
                        </button>
                    </th>
                    <th>
                        <button onClick={this.props.lNameSortUsersHandler}>
                            Last Name
                        </button>
                    </th>
                    <th>
                        <button onClick={this.props.titleSortUsersHandler}>
                            Title
                        </button>
                    </th>
                    <th>
                        <button onClick={this.props.sexSortUsersHandler}>
                            Sex
                        </button>
                    </th>
                    <th>
                        <button onClick={this.props.ageSortUsersHandler}>
                            Age
                        </button>
                    </th>
                    <th>Delete</th>
                </tr>
            </thead>
        );
    }
}

export default TableHead;
