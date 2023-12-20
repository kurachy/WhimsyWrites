import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchArticles = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/articles`);
    return response.data;
  } catch (error) {
    throw error;
  }
};