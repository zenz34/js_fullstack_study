import React, { Component } from "react";
import { getData } from "../../actions";
import { connect } from "react-redux";

class App extends Component {
    /*
    constructor(props) {
        super(props);
    }
    */

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getData());
        //const { dispatch } = this.props;
        //dispatch(getData());

        // axios({
        //     method: "get",
        //     url: "http://5826ed96322900d612000138bd.mockapi.io/items"
        // })
        //     .then(response => {
        //         if (response.statusText !== "OK") {
        //             throw Error(response.statusText);
        //         }
        //         this.setState({
        //             data: response.data,
        //             loadErrorFlag: false,
        //             loadingFlag: false
        //         });
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         this.setState({
        //             loadErrorFlag: true,
        //             loadingFlag: false
        //         });
        //     });
    }

    render() {
        if (this.props.fetchError) {
            return <p>{this.props.error}</p>;
        }
        if (this.props.isFetching) {
            return <p>Loading!</p>;
        }

        // console.log("this.props.fetchError");
        // console.log(typeof this.props.fetchError);
        // console.log("this.props.error");
        // console.log(typeof this.props.error);
        // console.log("this.props.isFetching");
        // console.log(typeof this.props.isFetching);
        // console.log("this.props.data");
        // console.log(typeof this.props.data);
        let listUI = this.props.data.map(obj => {
            return (
                <li key={obj.id}>
                    <p>
                        {obj.id}
                        {"    "}
                        {obj.label}
                    </p>
                </li>
            );
        });

        return (
            <ul className="App" style={{ listStyleType: "none" }}>
                <li />
                {listUI}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        fetchError: state.fetchError,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps)(App);
