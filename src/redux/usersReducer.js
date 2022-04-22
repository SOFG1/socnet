import { usersApi, followApi } from "../api/api";

const SET_FRIENDS = "SET FRIENDS";
const SET_USERS = "SET USERS";
const TOGGLE_FRIENDS_FETCHING = "TOGGLE FRIENDS FETCHING";
const TOGGLE_USERS_FETCHING = "TOGGLE USERS FETCHING";
const FOLLOW_CONDITION = "FOLLOW CONDITION";
const FOLLOW_USER = "FOLLOW USER";

//Action Creators
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
export const followConditionAC = (id) => ({ type: FOLLOW_CONDITION, id });
export const followUserAC = (id) => ({ type: FOLLOW_USER, id });

// Set Friends Thunk
export let setFriendsThunk = ()=> (dispatch) => {
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
    dispatch(setUsersAC({ ...data, page }));
    dispatch(toggleUsersFetchingAC(false));
  });
};

// Follow Thunk
export let followThunk = (id) => (dispatch) => {
  dispatch(followConditionAC(id));
  dispatch(followUserAC(id));
  followApi.followUser(id).then((code) => {
    if (code === 0) dispatch(followConditionAC(id));
  });
};

// Unfollow Thunk
export let unfollowThunk = (id) => (dispatch) => {
  dispatch(followConditionAC(id));
  dispatch(followUserAC(id));
  followApi.unfollowUser(id).then((code) => {
    if (code === 0) dispatch(followConditionAC(id));
  });
};

let initialState = {
  fetchingFriends: false,
  fetchingUsers: false,
  defaultCount: 20,
  defaultPage: 1,
  numberOfPages: 0,
  totalCount: 0,
  currentPage: null,
  friends: [],
  users: [],
  disabledFollow: [],
};

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
        currentPage: action.data.page,
      };
    case FOLLOW_CONDITION:
      if (!state.disabledFollow.includes(action.id)) {
        return {
          ...state,
          disabledFollow: [...state.disabledFollow, action.id],
        };
      }
      if (state.disabledFollow.includes(action.id)) {
        let index = state.disabledFollow.indexOf(action.id);
        let disabled = [...state.disabledFollow];
        disabled.splice(index, 1);
        return {
          ...state,
          disabledFollow: disabled,
        };
      }
      break;
    case FOLLOW_USER:
      const index = state.users.findIndex((user) => user.id === action.id);
      let users = [...state.users, ];
      const user = {...users[index], followed: !users[index].followed}
      users.splice(index,1,user);
      return {
        ...state,
        users,
      };
    default:
      return state;
  }
};

export default usersReducer;
