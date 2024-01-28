import { profileAPI } from '../api/api'

const ADD_POST = 'profile/ADD_POST',
    DELETE_POST = 'profile/DELETE_POST',
    SET_USER_PROFILE = 'profile/SET_USER_PROFILE',
    SET_USER_STATUS = 'profile/SET_USER_STATUS'

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
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                body: action.newPostBody,
                likesCount: 0
            }
            return { ...state, posts: [...state.posts, newPost] };
        }
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_USER_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state;
    }
};

// action creators
export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody }),
    deletePost = (postId) => ({ type: DELETE_POST, postId }),
    setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile }),
    setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

// thunks
export const getUserProfile = (userId) => async (dispatch) => {
    let promise = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(promise));
};
export const getUserStatus = (userId) => async (dispatch) => {
    let promise = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(promise))
}
export const updateUserStatus = (status) => async (dispatch) => {
    let promise = await profileAPI.updateUserStatus(status)
    if (promise.resultCode === 0) dispatch(setUserStatus(status))
}