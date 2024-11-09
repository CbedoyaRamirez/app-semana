import axios from 'axios';

const API_URL = 'https://dummyapi.online/api';  


export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/movies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts', error);
    return [];
  }
};

// Obtener un post específico
export const getPost = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post', error);
    return null;
  }
};

// Obtener los comentarios de un post
export const getComments = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/comments/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments', error);
    return [];
  }
};

// Obtener usuarios
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users', error);
    return [];
  }
};
