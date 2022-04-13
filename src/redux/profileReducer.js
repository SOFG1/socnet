import { profileApi } from "../api/api";
import { change, untouch } from "redux-form";

const SET_PROFILE = "SET PROFILE";
const SET_STATUS = "SET STATUS";
const TOGGLE_PROF_FETCHING = "TOGGLE PROF FETCHING";
const ADD_POST = "ADD POST";
const LIKE_POST = "LIKE POST";

export const setProfileAC = (profile) => ({ type: SET_PROFILE, profile });
export const toggleFetchingAC = (isFetching) => ({
  type: TOGGLE_PROF_FETCHING,
  isFetching,
});
export const setStatusAC = (status) => ({ type: SET_STATUS, status });
export const addPostAC = (text) => ({ type: ADD_POST, text });
export const likePostAC = (id) => ({ type: LIKE_POST, id });

//Set Profile Thunk
export const setProfileThunk = (id) => (dispatch) => {
  dispatch(toggleFetchingAC(true));
  // Getting profile data and status from API
  Promise.all([profileApi.getProfile(id), profileApi.getStatus(id)]).then(
    (res) => {
      dispatch(toggleFetchingAC(false));
      dispatch(setProfileAC(res[0]));
      dispatch(setStatusAC(res[1]));
    }
  );
};

//Change Status Thunk
export const changeStatusThunk = (status) => (dispatch) => {
  profileApi.setStatus(status).then((code) => {
    if (code === 0) dispatch(setStatusAC(status));
  });
};

//Add Post Thunk

export const addPostThunk = (text) => (dispatch) => {
  dispatch(addPostAC(text));
  dispatch(change("posts", "post", "", false));
  dispatch(untouch("posts", "post"));
};

let initialState = {
  profile: null,
  status: "My Status",
  posts: [
    {
      id: 0,
      text: "GOD BLESSED)",
      likes: 33,
      likedByMe: true,
    },
    {
      id: 1,
      text: "I gonna be a person like Elon Musk",
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
  isFetching: true,
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
        status: action.status,
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
        post.likes--
      }
      if (!post.likedByMe) {
        post.likes++
      }
      post.likedByMe = !post.likedByMe
      posts.splice(index, 1, post);
      return {
        ...state,
        posts: [...posts],
      };
    default:
      return state;
  }
};

export default profileReducer;
