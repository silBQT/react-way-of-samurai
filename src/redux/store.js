import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this.getState());
    }
}

window.state = store.getState();
export default store;