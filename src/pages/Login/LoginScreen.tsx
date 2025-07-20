import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { getRequestToken } from '../../services/requests/getRequestToken';
import { createSession } from '../../services/requests/createSession';

export default function LoginScreen({ navigation }: any) {
  const [authUrl, setAuthUrl] = useState<string | null>(null);
  const [requestToken, setRequestToken] = useState<string | null>(null);

  useEffect(() => {
    async function fetchToken() {
      const token = await getRequestToken();
      if (token) {
        setRequestToken(token);
        setAuthUrl(
          // `https://www.themoviedb.org/authenticate/${token}?redirect_to=https://www.yourapp.com/auth`,
          `https://www.themoviedb.org/authenticate/${token}?redirect_to=https://www.yourapp.com/auth&language=pt-BR`,
        );
      }
    }

    fetchToken();
  }, []);

  const handleNavigationChange = async (navState: any) => {
    const { url } = navState;

    if (url.includes('yourapp.com/auth')) {
      const sessionId = await createSession(requestToken!);
      if (sessionId) {
        // Aqui você pode salvar o sessionId (em contexto ou async storage)
        console.log('Sessão criada:', sessionId);
        navigation.replace('Home'); // redireciona para o app
      }
    }
  };

  if (!authUrl) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <WebView
      source={{ uri: authUrl }}
      onNavigationStateChange={handleNavigationChange}
      startInLoadingState
    />
  );
}
