import axios from 'axios';

export const renewAccessToken = async (expiredAccessToken) => {

try {
  const response = await axios.post('/api/token', {
    expiredAccessToken
  });
  const { accessToken } = response.data;
  return accessToken;
} catch (error) {
  console.error('Error refreshing token:', error);
  throw error;
}

  
};
