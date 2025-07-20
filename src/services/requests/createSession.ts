import api from "../api";

export async function createSession(requestToken: string) {
  try {
    const response = await api.post(`authentication/session/new`, {
      request_token: requestToken
    }, {
      params: {
        api_key: "a81f256628352a57fc50c3593588644f"
      }
    });

    return response.data.session_id;
  } catch (error) {
    console.log("Erro ao criar sessão:", error);
    return null;
  }
}
