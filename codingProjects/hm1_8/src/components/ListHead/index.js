import React, { Component } from "react";

const ListHead = props => {
  return (
    <div>
      <div>Edit</div>
      <div>
        <button>First Name</button>
      </div>
      <div>
        <button>Last Name</button>
      </div>
      <div>
        <button>Title</button>
      </div>
      <div>
        <button>Sex</button>
      </div>
      <div>
        <button>Age</button>
      </div>
      <div>Delete</div>
    </div>
  );
};

export default ListHead;
