//this is used to avoid complexity of router folder. becuse all functionaltiy
//run in the same folder it will make more complex. so we can control function in this file

import PostMessage from "../models/postMessage";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  res.send("THIS WORKS");
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
  res.send("Post Creation");
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;

  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id"); //check the id is valid or not and if true return error message

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    //if id is valid then update our post
    new: true, // (_id -> is updating id, post -> data to update, {obj} -> callback )
  });

  res.json(updatedPost);
};
