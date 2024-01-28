import { stopSubmit } from 'redux-form';
import { authAPI, profileAPI } from '../api/api'

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const SET_PROFILE_DATA = 'auth/SET_PROFILE_DATA';

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
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.resultCode === 0) {
        let { id, email, login } = response.data
        dispatch(setAuthUserData(id, email, login, true))
        profileAPI.getUserProfile(id).then(response => {
            dispatch(setProfileData(response));
        });
    }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    else {
        const message = response.messages.length > 0 ? response.messages[0] : 'Some error';
        dispatch(stopSubmit("login", { _error: message }));
    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}