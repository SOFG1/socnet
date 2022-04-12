let initialState = {
    friends: [    {
        "name": "Fixator_03",
        "id": 23097,
        "uniqueUrlName": null,
        "photos": {
          "small": "https://social-network.samuraijs.com/activecontent/images/users/23097/user-small.jpg?v=1",
          "large": "https://social-network.samuraijs.com/activecontent/images/users/23097/user.jpg?v=1"
        },
        "status": "sdfsdfsd",
        "followed": true
      },
      {
        "name": "alopwer",
        "id": 6032,
        "uniqueUrlName": null,
        "photos": {
          "small": "https://social-network.samuraijs.com/activecontent/images/users/6032/user-small.jpg?v=1",
          "large": "https://social-network.samuraijs.com/activecontent/images/users/6032/user.jpg?v=1"
        },
        "status": "qwertyadsaaaa",
        "followed": true
      },
      {
        "name": "ViktoriaDegt",
        "id": 23043,
        "uniqueUrlName": null,
        "photos": {
          "small": null,
          "large": null
        },
        "status": null,
        "followed": true
      }
    ]
}

let usersReducer = (state = initialState, action)=> {
    switch(action.type) {
        default:
            return state;
    }
}

export default usersReducer