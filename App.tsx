import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FilmeProvider } from './src/contexts/Filme/FilmeProvider';
import Routes from './src/routes/rotas';

export default function App() {
  return (
    <NavigationContainer>
      <FilmeProvider>
        <Routes />
      </FilmeProvider>
    </NavigationContainer>
  );
}