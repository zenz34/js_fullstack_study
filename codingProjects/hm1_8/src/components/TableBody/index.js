import React, { Component } from "react";
import TableItem from "../TableItem";

const TableBody = props => {
    console.log("TBody");
    console.log("props.usersArr");
    console.log(props.usersArr);

    // if empty   return empty table

    return (
        <tbody>
            <TableItem />
        </tbody>
    );
};

export default TableBody;

/*
      <li key={item.id} style={{ listStyleType: "none" }}>
        <button text="Edit" />
        <p>{item.fName}</p>
        <p>{item.lName}</p>
        <p>{item.title}</p>
        <p>{item.sex}</p>
        <p>{item.age}</p>
        <button text="Delete" />
      </li>
*/
