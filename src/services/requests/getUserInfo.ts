import api from '../api';

export async function getUserInfo(sessionId: string) {
  try {
    const response = await api.get('account', {
      params: {
        api_key: 'a81f256628352a57fc50c3593588644f',
        session_id: sessionId,
      },
    });

    return response.data; // contém id, name, username, etc.
  } catch (error) {
    console.log('Erro ao buscar dados do usuário:', error);
    return null;
  }
}
