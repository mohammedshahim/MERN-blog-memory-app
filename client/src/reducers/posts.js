import {
  CREATE,
  DELETE,
  FETCH_ALL,
  LIKE,
  UPDATE,
} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload); //this will remove a specific post from the post array. the condition is given like retrun back to array if the id is not equal to id in payload.

    case UPDATE: //both update and like are doing same function so it will return same for both. two case can have a single retrun statment
    case LIKE:
      return posts.map(
        (post) => (post._id === action.payload._id ? action.payload : post) // we want to update only a specific data so we will check each id in the post with payload id, if any id get match data init will update, otherwise return same post back to map.
      );

    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...posts, action.payload];

    default:
      return posts;
  }
};
