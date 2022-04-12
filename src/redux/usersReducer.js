import { usersApi } from "../api/api";


const SET_FRIENDS = "SET FRIENDS";
const TOGGLE_FRIENDS_FETCHING = "TOGGLE FRIENDS FETCHING";

//AC
export const setFriendsAC = (friends)=> ({type: SET_FRIENDS, friends});
export const toggleFriendsFetchingAC = (isFetching)=> ({type: TOGGLE_FRIENDS_FETCHING, isFetching})


// Set Friends Thunk
export let setFriendsThunk = (dispatch)=> {
    dispatch(toggleFriendsFetchingAC(true))
    usersApi.getFriends(3).then(friends => {
        dispatch(setFriendsAC(friends))
        dispatch(toggleFriendsFetchingAC(false))
    })
}


//State
let initialState = {
    friends: [],
    fetchingFriends: false,
}

//Reducer
let usersReducer = (state = initialState, action)=> {
    switch(action.type) {
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.friends,
            }
        case TOGGLE_FRIENDS_FETCHING:
            return {
                ...state,
                fetchingFriends: action.isFetching,
            }
        default:
            return state;
    }
}

export default usersReducer