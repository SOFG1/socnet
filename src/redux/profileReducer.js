let initialState = {
    profile: {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
          "facebook": "facebook.com",
          "website": null,
          "vk": "vk.com/dimych",
          "twitter": "https://twitter.com/@sdf",
          "instagram": "instagra.com/sds",
          "youtube": null,
          "github": "github.com",
          "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
          "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
          "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
      },
    posts: [],
}

let profileReducer = (state = initialState, action)=> {
    switch(action.type) {
        default:
            return state
    }
}

export default profileReducer;