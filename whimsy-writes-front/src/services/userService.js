import axios from '../axiosConfig';

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`/api/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  return null
}
