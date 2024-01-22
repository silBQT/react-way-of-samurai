const FOLLOW = 'FOLLOW',
UNFOLLOW = 'UNFOLLOW',
SET_USERS = 'SET-USERS',
SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
SET_IS_FETCHING = 'SET-IS-FETCHING',
SET_USER_ON_FOLLOWING = 'SET-USER-ON-FOLLOWING'

let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 15,
    pageSize: 5,
    isFetching: true,
    usersOnFollowing: []
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
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_USER_ON_FOLLOWING: {
            return {
                ...state,
                usersOnFollowing: action.isFollowing 
                ? [...state.usersOnFollowing, action.userId]
                : state.usersOnFollowing.filter(u => u !== action.userId)
            }
        }
        default:
            return state;
    }
};

export const follow = (userId) => ({ type: FOLLOW, userId }),
unfollow = (userId) => ({ type: UNFOLLOW, userId }),
setUsers = (users) => ({ type: SET_USERS, users}),
setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage}),
setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount}),
setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching}),
setUserOnFollowing = (isFollowing, userId) => ({ type: SET_USER_ON_FOLLOWING, isFollowing, userId })
