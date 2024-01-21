const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_PROFILE_DATA = 'SET-PROFILE-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA: {
            return {...state, ...action.data, isAuth: true};
        }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login } });
export const setProfileData = (profile) => ({});