import React, { Component } from "react";

const TableHead = props => {
    return (
        <thead>
            <tr>
                <th>Edit</th>
                <th>
                    <button>First Name</button>
                </th>
                <th>
                    <button>Last Name</button>
                </th>
                <th>
                    <button>Title</button>
                </th>
                <th>
                    <button>Sex</button>
                </th>
                <th>
                    <button>Age</button>
                </th>
                <th>Delete</th>
            </tr>
        </thead>
    );
};

export default TableHead;
