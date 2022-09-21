import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/rotas';
import { FilmeProvider } from './src/contexts/Filme/FilmeProvider';

export default function App() {
  return (
    <NavigationContainer>
      <FilmeProvider>
        <Routes />
      </FilmeProvider>
    </NavigationContainer>
  );
}