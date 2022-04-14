import { usersApi } from "../api/api";

const SET_FRIENDS = "SET FRIENDS";
const SET_USERS = "SET USERS";
const TOGGLE_FRIENDS_FETCHING = "TOGGLE FRIENDS FETCHING";
const TOGGLE_USERS_FETCHING = "TOGGLE USERS FETCHING";

export const setFriendsAC = (friends) => ({ type: SET_FRIENDS, friends });
export const toggleFriendsFetchingAC = (isFetching) => ({
  type: TOGGLE_FRIENDS_FETCHING,
  isFetching,
});
export const toggleUsersFetchingAC = (isFetching) => ({
  type: TOGGLE_USERS_FETCHING,
  isFetching,
});
export const setUsersAC = (data) => ({ type: SET_USERS, data });

// Set Friends Thunk
export let setFriendsThunk = (dispatch) => {
  dispatch(toggleFriendsFetchingAC(true));
  usersApi.getFriends(20).then((friends) => {
    dispatch(setFriendsAC(friends));
    dispatch(toggleFriendsFetchingAC(false));
  });
};

// Set Users Thunk
export let setUsersThunk = (page, count) => (dispatch) => {
  dispatch(toggleUsersFetchingAC(true));

  usersApi.getUsers(page, count).then((data) => {
    dispatch(setUsersAC({...data, page}));
    dispatch(toggleUsersFetchingAC(false));
  });
};


//State
let initialState = {
  fetchingFriends: false,
  fetchingUsers: false, //set
  defaultCount: 20, //set
  defaultPage: 1, //set
  numberOfPages: 0, //set
  totalCount: 0, //set
  curentPage: null,//set
  friends: [],
  users: [],//set
};

//Reducer
let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };
    case TOGGLE_FRIENDS_FETCHING:
      return {
        ...state,
        fetchingFriends: action.isFetching,
      };
    case TOGGLE_USERS_FETCHING:
      return {
        ...state,
        fetchingUsers: action.isFetching,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.data.items,
        numberOfPages: Math.ceil(action.data.totalCount / state.defaultCount),
        totalCount: action.data.totalCount,
        curentPage: action.data.page,
      };
    default:
      return state;
  }
};

export default usersReducer;
