const ADD_POST = 'ADD-POST',
UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY',
SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { id: 1, body: 'hey everyone!', likesCount: 100 },
        { id: 2, body: 'hey!', likesCount: 9 },
        { id: 3, body: ':)', likesCount: 1000 },
        { id: 4, body: 'MEOWWWWWW', likesCount: 99999 },
        { id: 5, body: 'реакт редакс ты знать будешь круто', likesCount: 1429912 },
    ],
    newPostBody: '',
    profile: null
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                body: state.newPostBody,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostBody: ''};
        }
        case UPDATE_NEW_POST_BODY: {
            return {...state, newPostBody: action.newPostBody};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
};

export const addPost = () => ({ type: ADD_POST }),
updateNewPostBody = (newPostBody) => ({ type: UPDATE_NEW_POST_BODY, newPostBody }),
setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile})