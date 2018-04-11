import React, { Component } from "react";
/*

<Page
    num={Math.ceil(
        this.state.users.length / this.state.numOnePage
    )}
    getPgIndexHandler={this.getPageIndexHandler}
    prePageHandler={this.prevPageIndexHandler}
    nextPageHandler={this.nextPageHandler}
/>
*/

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
