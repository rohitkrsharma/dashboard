import axios from 'axios';

const API_URL = "https://api.freeapi.app/api/v1/users";

export const login = async (email, password) => {
  const response = await axios.post('https://api.freeapi.app/api/v1/users/login', {
    email,
    password,
  });
  return response.data; // Ensure you're returning the data
};

export const signup = async (username, name, email, password) => {
  const response = await axios.post('https://api.freeapi.app/api/v1/users/register', {
    username, // Include username
    name,
    email,
    password,
  });
  return response.data;
};

export const logout = async (token) => {
  await axios.post(`${API_URL}/logout`, {}, { headers: { Authorization: `Bearer ${token}` } });
};

export const refreshToken = async (token) => {
  const response = await axios.post(`${API_URL}/refresh-token`, {}, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
};
