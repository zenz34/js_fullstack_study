import React, { Component } from "react";

class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>Prev</button>
        <button>Next</button>
      </div>
    );
  }
}

export default Page;
