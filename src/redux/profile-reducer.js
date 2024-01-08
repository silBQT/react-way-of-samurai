const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY';

export const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                body: state.newPostBody,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostBody = '';
            return state;
        case UPDATE_NEW_POST_BODY:
            state.newPostBody = action.newPostBody;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostBodyActionCreator = (newPostBody) => ({ type: UPDATE_NEW_POST_BODY, newPostBody: newPostBody });