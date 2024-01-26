import { stopSubmit } from 'redux-form';
import { authAPI, profileAPI } from '../api/api'

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
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return { ...state, ...action.payload };
        }
        case SET_PROFILE_DATA: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
};

// action creators
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth } });
export const setProfileData = (profile) => ({ type: SET_PROFILE_DATA, profile });

// thunks
export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            let { id, email, login } = data.data
            dispatch(setAuthUserData(id, email, login, true))
            profileAPI.getUserProfile(id).then(data => {
                dispatch(setProfileData(data));
            });
        }
    });
};
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
        else {
            const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
            dispatch(stopSubmit("login", {_error: message}));
        }
    })
}
export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}