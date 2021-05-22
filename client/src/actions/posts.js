import * as api from "../api";

// const getPosts = () => {                 //this is the common way we used before
//     const action ={                      //now we using thunk because async func using
//         type: "FETCH_ALL",
//         payload: []
//     }
//     return action;
// }

export const getPosts = () => async (dispatch) => {
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
