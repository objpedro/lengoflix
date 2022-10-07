import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FilmeProvider } from './src/contexts/Filme/FilmeProvider';
import { FilmeDetailsProvider } from './src/contexts/FilmeDetails/FilmesDetailsProvider';
import { FiltroProvider } from './src/contexts/Filtro/FiltroProvider';
import ContextBuilder from './src/contexts/utils/ContextBuilder';
import Routes from './src/routes/rotas';

const ContextContainer = ContextBuilder([FilmeProvider, FilmeDetailsProvider, FiltroProvider]);

export default function App() {
  return (
    <NavigationContainer>
      <ContextContainer>
        <Routes />
      </ContextContainer>
    </NavigationContainer>
  );
}