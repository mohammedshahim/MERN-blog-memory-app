import * as api from "../api";

// const getPosts = () => {                 //this is the common way we used before
//     const action ={                      //now we using thunk because async func using
//         type: "FETCH_ALL",
//         payload: []
//     }
//     return action;
// }

export const getPosts = () => async (dispatch) => {
  //dispatch is comming from redux-thunk
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: "FETCH_ALL",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  //post(data of new memory) will recived in here
  try {
    const { data } = await api.createPost(post); //send post to api's argument and set that specific post data to {data}
    dispatch({
      type: "CREATE",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
