const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _callSubscriber() {
        console.log('no subscribers (observers)')
    },
    _state: {
        profilePage: {
            posts: [
                { id: 1, body: 'hey everyone!', likesCount: 100 },
                { id: 2, body: 'hey!', likesCount: 9 },
                { id: 3, body: ':)', likesCount: 1000 },
                { id: 4, body: 'MEOWWWWWW', likesCount: 99999 },
                { id: 5, body: 'реакт редакс ты знать будешь круто', likesCount: 1429912 },
            ],
            newPostBody: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Adilet', profPic: 'https://coolsen.ru/wp-content/uploads/2021/11/89-20211129_204333.jpg'},
                { id: 2, name: 'Artem', profPic: 'https://gorodprizrak.com/wp-content/uploads/2023/06/34aa4d61b64a0520d7b7077d768d90b0.jpg'},
                { id: 3, name: 'Sereja', profPic: 'https://koshka.top/uploads/posts/2021-12/1639915471_1-koshka-top-p-chernoi-koshki-na-avatarku-1.jpg'},
                { id: 4, name: 'Jenya', profPic: 'https://i.pinimg.com/originals/b0/51/f8/b051f85bbc4ee044f3ac5d8f859c1d6a.jpg'},
                { id: 5, name: 'Stepa', profPic: 'https://i.pinimg.com/originals/0b/5d/92/0b5d92bb61b7dea1e106cd89a945b82f.jpg'},
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'sup' },
                { id: 3, message: 'how u doin bro' },
                { id: 4, message: 'doing fine, you?' }
            ],
            newMessageBody: ''
        },
        layout: {

        },
        sidebar: {

        }
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 1,
                body: this._state.profilePage.newPostBody,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostBody = '';
            this._callSubscriber(store.getState());
        }
        else if (action.type === UPDATE_NEW_POST_BODY) {
            this._state.profilePage.newPostBody = action.newPostBody;
            this._callSubscriber(store.getState());
        }
        else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 1,
                message: this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(store.getState());
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newMessageBody;
            this._callSubscriber(store.getState());
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostBodyActionCreator = (newPostBody) => ({ type: UPDATE_NEW_POST_BODY, newPostBody: newPostBody });
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = (newMessageBody) => ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: newMessageBody});

export default store;