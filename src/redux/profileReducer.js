import { profileApi } from "../api/api";
const SET_PROFILE = "SET PROFILE";
const TOGGLE_PROF_FETCHING = "TOGGLE PROF FETCHING";

export const setProfileAC = (profile)=> ({type: SET_PROFILE, profile});
export const toggleFetchingAC = (isFetching)=> ({type: TOGGLE_PROF_FETCHING, isFetching});

//Set Profile Thunk
export const setProfileThunk = (id)=> (dispatch) => {
  dispatch(toggleFetchingAC(true));
  profileApi.getProfile(id).then(profile => {
    dispatch(setProfileAC(profile));
    dispatch(toggleFetchingAC(false));
  }).catch(e => {
    console.log("error occured");
  })

}


let initialState = {
    profile: null,
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
        default:
            return state
    }
}

export default profileReducer;