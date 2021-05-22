// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case "UPDATE":
      return posts.map(
        (post) => (post._id === action.payload._id ? action.payload : post) // we want to update only a specific data so we will check each id in the post with payload id, if any id get match data init will update, otherwise return same post back to map.
      );

    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...posts, action.payload];

    default:
      return posts;
  }
};
