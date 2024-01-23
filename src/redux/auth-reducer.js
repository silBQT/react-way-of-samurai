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
            return { ...state, ...action.data, isAuth: true };
        }
        case SET_PROFILE_DATA: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login } });
export const setProfileData = (profile) => ({ type: SET_PROFILE_DATA, profile });

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            let { id, email, login } = data.data
            dispatch(setAuthUserData(id, email, login))
            profileAPI.getUserProfile(id).then(data => {
                dispatch(setProfileData(data));
            });
        }
    });
}