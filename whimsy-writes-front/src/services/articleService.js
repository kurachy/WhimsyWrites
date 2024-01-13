import axios from '../axiosConfig';

export const fetchArticles = async () => {
  try {
    const response = await axios.get('/api/articles');
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const fetchArticlesByUserId = async (userId) => {
  try {
    const response = await axios.get(`/api/articles/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
