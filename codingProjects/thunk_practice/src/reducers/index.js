import store from "../store";
const initState = {
    data: [],
    fetchError: false,
    isFetching: false,
    error: ""
};

const reducer = (state = initState, action) => {
    //let oldState = store.getState();
    //console.log("reducer " + action.type);
    switch (action.type) {
        case "FETCH_DATA_REQUEST":
            return {
                data: [],
                fetchError: false,
                isFetching: true,
                error: ""
            };
        case "FETCH_DATA_FAILURE":
            return {
                data: [],
                fetchError: true,
                isFetching: false,
                error: action.error
            };
        case "FETCH_DATA_SUCCESS":
            return {
                data: action.response,
                fetchError: false,
                isFetching: false,
                error: ""
            };
        default:
            return state;
    }
};

export default reducer;
