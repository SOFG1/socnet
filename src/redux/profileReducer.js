import { profileApi, followApi } from "../api/api";
import { change, untouch } from "redux-form";

const SET_PROFILE = "profile/SET PROFILE";
const SET_STATUS = "profile/SET STATUS";
const TOGGLE_PROF_FETCHING = "profile/TOGGLE PROF FETCHING";
const ADD_POST = "profile/ADD POST";
const LIKE_POST = "profile/LIKE POST";
const SEND_MESSAGE = "profile/SEND MESSAGE";
const DELETE_PROFILE = "profile/DELETE PROFILE";
const FOLLOW_DISABLE = "profile/FOLLOW DISABLE";
const FOLLOW_PROFILE = "profile/FOLLOW PROFILE";

export const setProfileAC = (profile) => ({ type: SET_PROFILE, profile });
export const toggleFetchingAC = (isFetching) => ({
  type: TOGGLE_PROF_FETCHING,
  isFetching,
});
export const setStatusAC = (status) => ({ type: SET_STATUS, status });
export const addPostAC = (text) => ({ type: ADD_POST, text });
export const likePostAC = (id) => ({ type: LIKE_POST, id });
export const sendMessageAC = (text) => ({ type: SEND_MESSAGE, text });
export const deleteProfileAC = () => ({ type: DELETE_PROFILE });
export const followDisableAC = () => ({ type: FOLLOW_DISABLE });
export const followProfileAC = () => ({ type: FOLLOW_PROFILE });

//Set Profile Thunk
export const setProfileThunk = (id) => async (dispatch) => {
  dispatch(deleteProfileAC());
  dispatch(toggleFetchingAC(true));
  const res = await Promise.all([
    profileApi.getProfile(id),
    profileApi.getStatus(id),
    followApi.getFollowed(id),
  ])
  let profile = res[0];
  profile.status = res[1];
  profile.followed = res[2];
  dispatch(setProfileAC(profile));
  dispatch(setStatusAC(res[1]));
  dispatch(toggleFetchingAC(false));
};

//Change Status Thunk
export const changeStatusThunk = (status) => async (dispatch) => {
  const code = await profileApi.setStatus(status)
  if (code === 0) dispatch(setStatusAC(status));
};

//Add Post Thunk
export const addPostThunk = (text) => (dispatch) => {
  dispatch(addPostAC(text));
  dispatch(change("posts", "post", ""));
  dispatch(untouch("posts", "post"));
};

//Send Message Thunk
export const sendMessageThunk = (text) => (dispatch) => {
  dispatch(sendMessageAC(text));
  dispatch(change("messages", "message", ""));
  dispatch(untouch("messages", "message"));
};


// Needs refactoring

const followingFlow = async (id, apiMethod, dispatch)=> {
  dispatch(followDisableAC());
  const code = await apiMethod(id)
  if (code === 0) {
    dispatch(followProfileAC());
    dispatch(followDisableAC());
  }
}

//Follow User Thunk
export const followUserThunk = (id) => (dispatch) => {
  followingFlow(id, followApi.followUser, dispatch)
};

//Unfollow User Thunk
export const unfollowUserThunk = (id) => (dispatch) => {
  followingFlow(id, followApi.unfollowUser, dispatch)
};

let initialState = {
  profile: null,
  isFetching: false,
  followDisabled: false,
  posts: [
    {
      id: 0,
      text: "GOD BLESSED)",
      likes: 33,
      likedByMe: true,
    },
    {
      id: 1,
      text: "I'm going to be a person like Elon Musk",
      likes: 100,
      likedByMe: false,
    },
    {
      id: 2,
      text: "I'll be a billionnaire",
      likes: 101,
      likedByMe: false,
    },
    {
      id: 3,
      text: "I work like evil !!!",
      likes: 56,
      likedByMe: false,
    },
  ],
  messages: [
    {
      id: 0,
      text: "Hi how are you ?",
      date: "17:00",
    },
    {
      id: 1,
      text: "I'm fine, you ?",
      date: "17:01",
    },
    {
      id: 2,
      text: "What are you doing ?",
      date: "17:03",
    },
    {
      id: 3,
      text: "I'm working now",
      date: "17:05",
    },
    {
      id: 4,
      text: "Ok. Good luck",
      date: "17:06",
    },
  ],
};

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case TOGGLE_PROF_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_STATUS:
      return {
        ...state,
        profile: {
          ...state.profile,
          status: action.status ? action.status : "",
        },
      };
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            text: action.text,
            likes: 0,
          },
        ],
      };
    case LIKE_POST:
      let posts = [...state.posts];
      let index = posts.findIndex((post) => post.id === action.id);
      let post = { ...state.posts[index] };
      if (post.likedByMe) {
        post.likes--;
      }
      if (!post.likedByMe) {
        post.likes++;
      }
      post.likedByMe = !post.likedByMe;
      posts.splice(index, 1, post);
      return {
        ...state,
        posts: [...posts],
      };
    case SEND_MESSAGE:
      let time = new Date();
      let message = {
        text: action.text,
        id: state.messages.length + 1,
        date: time.toLocaleString("en-US").slice(-11, -6),
      };
      return {
        ...state,
        messages: [...state.messages, message],
      };
    case DELETE_PROFILE:
      return {
        ...state,
        profile: null,
      };
    case FOLLOW_DISABLE:
      return {
        ...state,
        followDisabled: !state.followDisabled,
      };
    case FOLLOW_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          followed: !state.profile.followed,
        },
      };
    default:
      return state;
  }
};

export default profileReducer;
