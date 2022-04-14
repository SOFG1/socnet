import { usersApi } from "../api/api";


const SET_FRIENDS = "SET FRIENDS";
const TOGGLE_FRIENDS_FETCHING = "TOGGLE FRIENDS FETCHING";

//AC
export const setFriendsAC = (friends)=> ({type: SET_FRIENDS, friends});
export const toggleFriendsFetchingAC = (isFetching)=> ({type: TOGGLE_FRIENDS_FETCHING, isFetching})


// Set Friends Thunk
export let setFriendsThunk = (dispatch)=> {
    dispatch(toggleFriendsFetchingAC(true))
    usersApi.getFriends(20).then(friends => {
        dispatch(setFriendsAC(friends))
        dispatch(toggleFriendsFetchingAC(false))
    })
}

//State
let initialState = {
    friends: [],
    fetchingFriends: false,
    fetchingUsers: false,
    numberOfPages: 17,
    totalCount: 0,
    curentPage: 9,
    users: [ {
        "name": "Shubert",
        "id": 2,
        "photos": {
          "small": null,
          "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        },
        "status": null,
        "followed": true
      },
      {
        "name": "Hacker",
        "id": 3,
        "photos": {
          "small": null,
          "large": null
        },
        "status": null,
        "followed": false
      }],
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

