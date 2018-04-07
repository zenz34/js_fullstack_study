import React, { Component } from "react";

const TableItem = props => {
    return (
        <tr>
            <th>
                <button>Edit</button>
            </th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>
                <button>Delete</button>
            </td>
        </tr>
    );
};

export default TableItem;

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
