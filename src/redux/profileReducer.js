import { profileApi } from "../api/api";
const SET_PROFILE = "SET PROFILE";
const SET_STATUS = "SET STATUS";
const TOGGLE_PROF_FETCHING = "TOGGLE PROF FETCHING";

export const setProfileAC = (profile)=> ({type: SET_PROFILE, profile});
export const toggleFetchingAC = (isFetching)=> ({type: TOGGLE_PROF_FETCHING, isFetching});
export const setStatusAC = (status)=> ({type: SET_STATUS, status});

//Set Profile Thunk
export const setProfileThunk = (id)=> (dispatch) => {
  dispatch(toggleFetchingAC(true));
  // Getting profile data and status from API
  Promise.all([profileApi.getProfile(id), profileApi.getStatus(id)]).then(res => {
    dispatch(toggleFetchingAC(false));
    dispatch(setProfileAC(res[0]));
    dispatch(setStatusAC(res[1]));
  })
}



//Change Status Thunk
export const changeStatusThunk = (status)=> (dispatch)=> {
  profileApi.setStatus(status).then(code => {
    if(code === 0) dispatch(setStatusAC(status));
  })
}


let initialState = {
    profile: null,
    status: "My Status",
    posts: [],
    isFetching: true,
}

let profileReducer = (state = initialState, action)=> {
    switch(action.type) {
      case SET_PROFILE:
        return {
          ...state,
          profile: action.profile,
        }
        case TOGGLE_PROF_FETCHING:
          return {
            ...state,
            isFetching: action.isFetching,
          }
        case SET_STATUS: 
          return {
            ...state,
            status: action.status,
          }
        default:
            return state
    }
}

export default profileReducer;