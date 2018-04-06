import React, { Component } from "react";

const ListHead = props => {
    return (
        <thead>
            <tr>
                <th>Edit</th>
                <th>
                    <th>First Name</th>
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

export default ListHead;
