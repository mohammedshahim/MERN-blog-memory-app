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

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post); // This will send data to update and get response of updated post data.
    dispatch({
      type: "UPDATE",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({
      type: "DELETE",
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({
      type: "UPDATE", //here when you look at reducers they have LIKE case, but here we giving UPDATE because both UPDATE and LIKE have doing same function. so we can give any one, no issue for that.
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
