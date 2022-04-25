import profileReducer from "./profileReducer";
import { likePostAC } from "./profileReducer";

test("4'th post's likes should be incremented", () => {
  //Initial data

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

  let action = likePostAC(3);

  //Result data
  let newPost = profileReducer(initialState, action).posts.find(post => post.id === 3)
  let oldPost = initialState.posts.find(post => post.id === 3);


  //Result
  expect(newPost.likes).toBe(oldPost.likes + 1);
});
