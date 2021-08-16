import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error){
        res.status(404).json({message: error});
    }
}

export const getPost = async (req,res) => {
    const {id} = req.params;

    try {
        const post = await PostMessage.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({message: error});
    }
}

export const createPost = (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        newPost.save();
        
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error});
    }
}

export const updatePost = async (req,res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id}, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with id that is');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Post faild to exist successfully' });
}

export const likePost = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with id is that');

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 },{new: true});

    res.json(updatedPost);
}

export default router;