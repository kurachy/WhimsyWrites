// userService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
