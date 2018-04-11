import React, { Component } from "react";
import { Link } from "react-router-dom";
/*
    {
        UserId: 1,
        FName: "Zack",
        LName: "Zhao",
        Title: "Manager",
        Age: 29,
        Sex: "Male",
        StartDate: "2018-01-29",
        OfficePhone: 34322171745,
        CellPhone: 34322171745,
        SMS: 34322171745,
        Email: "zz87022n@pace.edu",
        Manager: "Peiwei Mi",
        DirectReports: 4
    },

*/

const TableItem = props => {
    console.log("val");
    console.log(props.val);
    return (
        <tr>
            <th>
                <Link to="/edit">Edit</Link>
            </th>
            <td>{props.val.FName}</td>
            <td>{props.val.LName}</td>
            <td>{props.val.Title}</td>
            <td>{props.val.Age}</td>
            <td>{props.val.Sex}</td>
            <td>
                <Link to="/delete">Delete</Link>
            </td>
        </tr>
    );
};

export default TableItem;
