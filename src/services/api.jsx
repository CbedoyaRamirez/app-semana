import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';  
const API_URLUSER = 'https://api.escuelajs.co/api/v1/users';  
const API_ACCESSUSER = 'https://dummyjson.com/auth/login';  


export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts', error);
    return [];
  }
};


export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URLUSER}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users', error);
    return [];
  }
};

export const validateAccessUsers = async (user, pass) => {
  try {
    const response = await axios.post(`${API_ACCESSUSER}`,{
      username: user,
      password: pass,
      expiresInMins: 30,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users', error);
    return [];
  }
};