import { combineReducers } from "redux";
import users from "./usersListReducer";
import userToEdit from "./userToEditReducer";

const reducers = combineReducers({
    users,
    userToEdit
});

export default reducers;
