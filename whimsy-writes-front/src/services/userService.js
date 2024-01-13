import axios from '../axiosConfig';

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`/api/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


export const getUserById = async (userId) => {

  try {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}
