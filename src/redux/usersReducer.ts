import { usersApi, followApi } from "../api/api";
import { UserType } from "../types/types";

const SET_FRIENDS = "users/SET FRIENDS"; 
const SET_USERS = "users/SET USERS";
const TOGGLE_FRIENDS_FETCHING = "users/TOGGLE FRIENDS FETCHING";
const TOGGLE_USERS_FETCHING = "users/TOGGLE USERS FETCHING";
const FOLLOW_CONDITION = "users/FOLLOW CONDITION";
const FOLLOW_USER = "users/FOLLOW USER";

//Set Friends AC
type SendFriendsActionType = {
  type: typeof SET_FRIENDS,
  friends: UserType[] | []
}

export const setFriendsAC = (friends:UserType[] | []):SendFriendsActionType => ({ type: SET_FRIENDS, friends });

// Toggle Friends Fetching AC
type ToogleFriendsFetchingActionType = {
  type: typeof TOGGLE_FRIENDS_FETCHING
  isFetching: boolean
}
export const toggleFriendsFetchingAC = (isFetching:boolean):ToogleFriendsFetchingActionType => ({
  type: TOGGLE_FRIENDS_FETCHING,
  isFetching,
});

//ToggleUsersFetchingAC
type ToggleUsersFetchingActionType = {
  type: typeof TOGGLE_USERS_FETCHING
  isFetching: boolean
}
export const toggleUsersFetchingAC = (isFetching:boolean):ToggleUsersFetchingActionType => ({
  type: TOGGLE_USERS_FETCHING,
  isFetching,
});

//Set Users AC
type SetUsersActionType = {
  type: typeof SET_USERS
  data: SetUsersActionDataType
}
type SetUsersActionDataType = {
  error: any,
  items: [UserType]
  page: number
  totalCount: number
}
export const setUsersAC = (data: SetUsersActionDataType):SetUsersActionType => ({ type: SET_USERS, data });

//Follow Condition AC
type FollowConditionActionType = {
  type: typeof FOLLOW_CONDITION
  id: number
}
export const followConditionAC = (id: number):FollowConditionActionType => ({ type: FOLLOW_CONDITION, id });

//Follow User AC
type FollowUserActionType = {
  type: typeof FOLLOW_USER,
  id: number
}
export const followUserAC = (id: number):FollowUserActionType => ({ type: FOLLOW_USER, id });

// Set Friends Thunk
export let setFriendsThunk = ()=> async (dispatch) => {
  dispatch(toggleFriendsFetchingAC(true));
  const friends = await usersApi.getFriends(20)
  dispatch(setFriendsAC(friends));
  dispatch(toggleFriendsFetchingAC(false));
};

// Set Users Thunk
export let setUsersThunk = (page, count) => async (dispatch) => {
  dispatch(toggleUsersFetchingAC(true));
  const data = await usersApi.getUsers(page, count)
  dispatch(setUsersAC({ ...data, page }));
  dispatch(toggleUsersFetchingAC(false));
};

// Follow Thunk
export let followThunk = (id) => async (dispatch) => {
  dispatch(followConditionAC(id));
  dispatch(followUserAC(id));
  const code = await followApi.followUser(id);
  if (code === 0) dispatch(followConditionAC(id));
};

// Unfollow Thunk
export let unfollowThunk = (id) => async (dispatch) => {
  dispatch(followConditionAC(id));
  dispatch(followUserAC(id));
  const code = await followApi.unfollowUser(id);
  if (code === 0) dispatch(followConditionAC(id));
};

//State
type InitialStateType = {
  fetchingFriends: boolean
  fetchingUsers: boolean
  defaultCount: number
  defaultPage: number
  numberOfPages: number
  totalCount: number
  currentPage: number | null
  friends: UserType[] | []
  users: UserType[] | []
  disabledFollow: number[] | []
}

let initialState: InitialStateType = {
  fetchingFriends: false,
  fetchingUsers: false,
  defaultCount: 60,
  defaultPage: 1,
  numberOfPages: 0,
  totalCount: 0,
  currentPage: null,
  friends: [],
  users: [],
  disabledFollow: [],
};

//Reducer
let usersReducer = (state:InitialStateType = initialState, action:any): InitialStateType => {
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
