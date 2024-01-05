import axios from '../axiosConfig';

export const login = async (userData) => {
  try {
    const response = await axios.post(`/api/login`, userData);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    await axios.post('/api/logout');

  } catch (error) {
    console.error('Logout failed:', error);
  }
}

export const protectedData = async (accessToken) => {
  try {
    const response = await axios.get(`/api/protected`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};