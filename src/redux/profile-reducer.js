const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY';

let initialState = {
    posts: [
        { id: 1, body: 'hey everyone!', likesCount: 100 },
        { id: 2, body: 'hey!', likesCount: 9 },
        { id: 3, body: ':)', likesCount: 1000 },
        { id: 4, body: 'MEOWWWWWW', likesCount: 99999 },
        { id: 5, body: 'реакт редакс ты знать будешь круто', likesCount: 1429912 },
    ],
    newPostBody: ''
}

export const profileReducer = (state = initialState, action) => {
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