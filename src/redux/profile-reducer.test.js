import { addPost, deletePost, profileReducer } from "./profile-reducer";

const state = {
    posts: [
        { id: 1, body: 'hey everyone!', likesCount: 100 },
        { id: 2, body: 'hey!', likesCount: 9 },
        { id: 3, body: ':)', likesCount: 1000 },
        { id: 4, body: 'MEOWWWWWW', likesCount: 99999 },
        { id: 5, body: 'реакт редакс ты знать будешь круто', likesCount: 1429912 },
    ],
    profile: null,
    status: ''
};

test("after adding post length of posts must be incremented", () => {
    // 1. test data
    const action = addPost('hey');

    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(6);
    
});
test("after deleting post length of posts must be decremented", () => {
    // 1. test data
    const action = deletePost(1);
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);

})
test("after deleting post with non-existent id length of posts mustn't be decremented", () => {
    // 1. test data
    const action = deletePost(1000);
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);

})
test("body of new post must be correct", () => {
    // 1. test data
    const action = addPost('hey');
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[5].body).toBe('hey');
    
});