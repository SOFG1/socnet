import { profileApi, followApi } from "../api/api";
import { change, untouch } from "redux-form";
import { UserProfileType, UserProfileContactsType, UserProfilePhotosType } from "../types/types";

const SET_PROFILE = "profile/SET PROFILE";
const SET_STATUS = "profile/SET STATUS";
const TOGGLE_PROF_FETCHING = "profile/TOGGLE PROF FETCHING";
const ADD_POST = "profile/ADD POST";
const LIKE_POST = "profile/LIKE POST";
const SEND_MESSAGE = "profile/SEND MESSAGE";
const DELETE_PROFILE = "profile/DELETE PROFILE";
const FOLLOW_DISABLE = "profile/FOLLOW DISABLE";
const FOLLOW_PROFILE = "profile/FOLLOW PROFILE";
const SET_PHOTOS = "profile/SET PHOTOS";
const SET_PROFILE_INFO = "profile/SET PROFILE INFO";

//Set Profile AC
type SetProfileActionType = {
  type: typeof SET_PROFILE;
  profile: UserProfileType;
};




export const setProfileAC = (
  profile: UserProfileType
): SetProfileActionType => ({ type: SET_PROFILE, profile });

//Toggle Fetching AC
type ToggleFetchingActionType = {
  type: typeof TOGGLE_PROF_FETCHING;
  isFetching: boolean;
};
export const toggleFetchingAC = (
  isFetching: boolean
): ToggleFetchingActionType => ({
  type: TOGGLE_PROF_FETCHING,
  isFetching,
});

// Set Status AC
type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatusAC = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
});

// Add Post AC
type AddPostActionType = {
  type: typeof ADD_POST;
  text: string;
};
export const addPostAC = (text: string): AddPostActionType => ({
  type: ADD_POST,
  text,
});

// Like Post AC
type LikePostActionType = {
  type: typeof LIKE_POST;
  id: number;
};
export const likePostAC = (id: number): LikePostActionType => ({
  type: LIKE_POST,
  id,
});

// Send Message AC
type SendMessageActionType = {
  type: typeof SEND_MESSAGE;
  text: string;
};
export const sendMessageAC = (text: string): SendMessageActionType => ({
  type: SEND_MESSAGE,
  text,
});

// Delete Profile AC
export const deleteProfileAC = (): { type: typeof DELETE_PROFILE } => ({
  type: DELETE_PROFILE,
});

// Follow Disable AC
export const followDisableAC = (): { type: typeof FOLLOW_DISABLE } => ({
  type: FOLLOW_DISABLE,
});

// Follow Profile AC
export const followProfileAC = (): { type: typeof FOLLOW_PROFILE } => ({
  type: FOLLOW_PROFILE,
});

// SetPhotos AC
type SetPhotosActionType = {
  type: typeof SET_PHOTOS,
  photos: UserProfilePhotosType
}
export const setPhotosAC = (photos: UserProfilePhotosType):SetPhotosActionType => ({ type: SET_PHOTOS, photos });

// SetProfileInfo AC
type SetProfileInfoActionType = {
  type: typeof SET_PROFILE_INFO,
  profile: ProfileInfoType
}
type ProfileInfoType = {
  aboutMe: string
  contacts: UserProfileContactsType,
  fullName: string,
  lookingForAJob: boolean
  lookingForAJobDescription: string
}
export const setProfileInfoAC = (profile:ProfileInfoType):SetProfileInfoActionType => ({
  type: SET_PROFILE_INFO,
  profile,
});

//Set Profile Thunk
export const setProfileThunk = (id) => async (dispatch) => {
  dispatch(deleteProfileAC());
  dispatch(toggleFetchingAC(true));
  const res = await Promise.all([
    profileApi.getProfile(id),
    profileApi.getStatus(id),
    followApi.getFollowed(id),
  ]);
  let profile = res[0];
  profile.status = res[1];
  profile.followed = res[2];
  dispatch(setProfileAC(profile));
  dispatch(setStatusAC(res[1]));
  dispatch(toggleFetchingAC(false));
};

//Change Status Thunk
export const changeStatusThunk = (status) => async (dispatch) => {
  try {
    const code = await profileApi.setStatus(status);
    if (code === 0) dispatch(setStatusAC(status));
  } catch (e) {
    console.log(e);
  }
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

//Update Avatar Thunk
export const updateAvatarThunk = (image) => async (dispatch) => {
  const data = await profileApi.setAvatar(image);
  if (data.resultCode === 0) dispatch(setPhotosAC(data.data.photos));
  return data.resultCode;
};

//Follow / Unfollow flow
const followingFlow = async (id, apiMethod, dispatch) => {
  dispatch(followDisableAC());
  const code = await apiMethod(id);
  if (code === 0) {
    dispatch(followProfileAC());
    dispatch(followDisableAC());
  }
};

//Follow User Thunk
export const followUserThunk = (id) => (dispatch) => {
  followingFlow(id, followApi.followUser, dispatch);
};

//Unfollow User Thunk
export const unfollowUserThunk = (id) => (dispatch) => {
  followingFlow(id, followApi.unfollowUser, dispatch);
};

//Set Profile Thunk
export const editProfileThunk = (profile) => (dispatch) => {
  return profileApi.editProfile(profile);
};

//State
type InitialStateType = {
  profile: UserProfileType
  isFetching: boolean
  followDisabled: boolean
  posts: PostType[] | []
  messages: MessageType[] | []

}

type PostType = {
  id: number
  text: string
  likes: number
  likedByMe: boolean
}

type MessageType = {
  id: number
  text: string
  date: string
}

let initialState:InitialStateType = {
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

//Reducer
let profileReducer = (state:InitialStateType = initialState, action:any):InitialStateType => {
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
            likedByMe: false,
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
    case SET_PHOTOS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos,
        },
      };
    case SET_PROFILE_INFO:
      console.log(action.profile)
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.profile,
        },
      };
    default:
      return state;
  }
};

export default profileReducer;
