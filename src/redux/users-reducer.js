import { usersAPI } from '../api/api'
import { updateObjectInArray } from '../utils/object-helpers';

const FOLLOW = 'users/FOLLOW',
    UNFOLLOW = 'users/UNFOLLOW',
    SET_USERS = 'users/SET_USERS',
    SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT',
    SET_IS_FETCHING = 'users/SET_IS_FETCHING',
    SET_USER_ON_FOLLOWING = 'users/SET_USER_ON_FOLLOWING'

let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 5,
    isFetching: true,
    usersOnFollowing: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
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

// action creators
export const followSuccess = (userId) => ({ type: FOLLOW, userId }),
    unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId }),
    setUsers = (users) => ({ type: SET_USERS, users }),
    setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage }),
    setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount }),
    setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching }),
    setUserOnFollowing = (isFollowing, userId) => ({ type: SET_USER_ON_FOLLOWING, isFollowing, userId })

// thunks
export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true));

    let response = await usersAPI.requestUsers(page, pageSize)
    dispatch(setCurrentPage(page));
    dispatch(setIsFetching(false))
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setUserOnFollowing(true, userId))
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setUserOnFollowing(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow, followSuccess)
}
export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow, unfollowSuccess)
}