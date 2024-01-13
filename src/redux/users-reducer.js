const FOLLOW = 'FOLLOW',
UNFOLLOW = 'UNFOLLOW',
SET_USERS = 'SET-USERS',
SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 15,
    pageSize: 5
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    };
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    };
                    return u;
                })
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        default:
            return state;
    }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId: userId }),
unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId: userId }),
setUsersActionCreator = (users) => ({ type: SET_USERS, users: users}),
setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage}),
setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount})
