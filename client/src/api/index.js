import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost); //for update post we need id (req.params) in server side, so we need to pass id within the link. And next to it will be the updated data.
