import api from '../api';

export async function movieReviewsService(idFilme: number) {
  try {
    const resultado = await api.get(`movie/${idFilme}/reviews`, {
      params: {
        api_key: 'a81f256628352a57fc50c3593588644f',
        language: 'pt-BR',
      },
    });
    return resultado.data;
  } catch (error) {
    console.log('Movie Reviews Service: ', error);
    return {};
  }
}
