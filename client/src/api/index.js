import axios from 'axios';

const url = 'https://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url, newPost);