import { dialogsReducer, sendMessage } from "./dialogs-reducer";

const state = {
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
    ]
}

test("after sending message length of messages must be incremented", () => {
    // 1. test data
    const action = sendMessage('hey');

    // 2. action
    let newState = dialogsReducer(state, action);
    
    // 3. expectation
    expect(newState.messages.length).toBe(5);
    
});