import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST',
SET_USER_PROFILE = 'SET-USER-PROFILE',
SET_USER_STATUS = 'SET-USER-STATUS'

let initialState = {
    posts: [
        { id: 1, body: 'hey everyone!', likesCount: 100 },
        { id: 2, body: 'hey!', likesCount: 9 },
        { id: 3, body: ':)', likesCount: 1000 },
        { id: 4, body: 'MEOWWWWWW', likesCount: 99999 },
        { id: 5, body: 'реакт редакс ты знать будешь круто', likesCount: 1429912 },
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                body: action.newPostBody,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
};

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody }),
setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile}),
setUserStatus = (status) => ({ type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(data => {
            dispatch(setUserStatus(data))
        })
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status).then(data => {
            if (data.resultCode === 0) dispatch(setUserStatus(status))
        })
    }
}