import React, { Component } from "react";
import TableItem from "../TableItem";

const TableBody = props => {
    console.log("TBody");
    console.log("props.val");
    console.log(props.val);

    // if empty   return empty table

    return (
        <tbody>
            {props.val.map(element => {
                return <TableItem val={element} />;
            })}
        </tbody>
    );
};

export default TableBody;
