import React, { Component } from "react";

const ListItem = props => {
    return (
        <div>
            <button>Edit</button>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <button>Delete</button>
        </div>
    );
};

export default ListItem;

/*





    <div key={props.item.id}>
      <button text="Edit" />
      <p>{props.item.fName}</p>
      <p>{props.item.lName}</p>
      <p>{props.item.title}</p>
      <p>{props.item.sex}</p>
      <p>{props.item.age}</p>
      <button text="Delete" />
    </div>
*/
