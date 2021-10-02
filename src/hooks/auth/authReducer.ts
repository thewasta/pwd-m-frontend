interface iAction {
    type: string;
    payload: any;
}

export const authTypes = {
    login: "[auth] login",
    logout: "[auth] logout"
};
export const authReducer = (state: {}, action: iAction) => {
    switch (action.type) {
        case authTypes.login:
            localStorage.setItem("user", JSON.stringify({logged: true}));
            return {
                ...action.payload,
                logged: true
            };
        case authTypes.logout:
            localStorage.setItem("user", JSON.stringify({logged: false}));
            return {
                logged: false
            };
        default:
            return state;
    }
};