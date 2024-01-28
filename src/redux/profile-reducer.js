import { profileAPI } from '../api/api'

const ADD_POST = 'profile/ADD_POST',
    DELETE_POST = 'profile/DELETE_POST',
    SET_USER_PROFILE = 'profile/SET_USER_PROFILE',
    SET_USER_STATUS = 'profile/SET_USER_STATUS',
    SAVE_USER_IMAGE = 'profile/SAVE_USER_IMAGE'

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
        case SAVE_USER_IMAGE: {
            return { ...state, profile: { ...state.profile, photos: action.image } }
        }
        default:
            return state;
    }
};

// action creators
export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody }),
    deletePost = (postId) => ({ type: DELETE_POST, postId }),
    setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile }),
    setUserStatus = (status) => ({ type: SET_USER_STATUS, status }),
    saveUserImageSuccess = (image) => ({ type: SAVE_USER_IMAGE, image })

// thunks
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response));
};
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(response))
}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status)
    if (response.resultCode === 0) dispatch(setUserStatus(status))
}
export const saveUserImage = (image) => async (dispatch) => {
    let response = await profileAPI.saveImage(image)
    if (response.resultCode === 0) dispatch(saveUserImageSuccess(response.data.photos))
}