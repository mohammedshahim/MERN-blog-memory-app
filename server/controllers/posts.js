//this is used to avoid complexity of router folder. becuse all functionaltiy
//run in the same folder it will make more complex. so we can control function in this file

export const getPosts = (req, res) => {
  res.send("THIS WORKS");
};

export const createPost = (req, res) => {
  res.send("Post Creation");
};
