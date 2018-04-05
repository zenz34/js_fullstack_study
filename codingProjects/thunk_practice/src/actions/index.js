import store from "../store";
import axios from "axios";

function requestStart() {
    return {
        type: "FETCH_DATA_REQUEST"
    };
}

function requestFail(error) {
    return {
        type: "FETCH_DATA_FAILURE",
        error
    };
}

function requestSuccess(response) {
    return {
        type: "FETCH_DATA_SUCCESS",
        response
    };
}

export function getData() {
    return (dispatch, getState) => {
        dispatch(requestStart());
        axios
            .get("http://5826ed963900d612000138bd.mockapi.io/items")
            .then(response => {
                // if (response.statusText !== "OK") {
                //     // application error
                //     store.dispatch(requestFail(response.statusText));
                // } else {
                // console.log("response");
                // console.log(response.data);
                dispatch(requestSuccess(response.data));
                // }
            })
            .catch(error => {
                // can not found property: err.response.statusText
                // console.log("error");
                // console.log(typeof error);
                // console.log(error.response.statusText);

                // Object.keys(error).forEach(val => {
                //     console.log(val);
                //     console.log("+");
                //     console.log(error[val]);
                // });

                dispatch(requestFail(error.response.statusText));
            });
    };
}

// export function getUsers() {
//     return (dispatch, getState) => {
//         dispatch(requestStart());
//         axios
//             .get(API_URL)
//             .then(response => {
//                 dispatch(requestSuccess(response.data));
//             })
//             .catch(err => {
//                 dispatch(requestFail(err.response.statusText));
//             });
//     };
// }
