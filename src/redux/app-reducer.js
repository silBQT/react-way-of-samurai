import { getAuthUserData } from "./auth-reducer";

const INIZIALIZATED_SUCCESS = 'app/INIZIALIZATED_SUCCESS';

let initialState = {
    inizializated: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIZIALIZATED_SUCCESS: {
            return { ...state, inizializated: true };
        }
        default:
            return state;
    }
};

// action creators
export const inizializatedSuccess = () => ({ type: INIZIALIZATED_SUCCESS });

// thunks
export const inizializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(inizializatedSuccess());
    })
}