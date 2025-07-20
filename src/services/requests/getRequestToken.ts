import api from '../api';

export async function getRequestToken() {
  try {
    const response = await api.get('authentication/token/new', {
      params: {
        api_key: 'a81f256628352a57fc50c3593588644f',
      },
    });
    return response.data.request_token;
  } catch (error) {
    console.log('Erro ao obter request_token:', error);
    return null;
  }
}
