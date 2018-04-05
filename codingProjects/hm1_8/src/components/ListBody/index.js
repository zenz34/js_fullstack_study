import React, { Component } from "react";
import ListItem from "../ListItem";

const ListBody = props => {
  console.log("TBody");
  console.log("props.usersArr");
  console.log(props.usersArr);

  // if empty   return empty table

  return (
    <div>
      <ListItem />
    </div>
  );
};

export default ListBody;

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
