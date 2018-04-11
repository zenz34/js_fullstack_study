const userToEdit = (state = {}, action) => {
    switch (action.type) {
        case "GET_EDITING_USER":
            return state;
        case "POST_EDITING_USER":
            return action.user;
        default:
            return state;
    }
};

export default userToEdit;
