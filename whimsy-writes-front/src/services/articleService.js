import axios from '../axiosConfig';

export const fetchArticles = async () => {
  try {
    const response = await axios.get('/api/articles');
    return response.data;
  } catch (error) {
    throw error;
  }
};