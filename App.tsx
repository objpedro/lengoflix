import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MovieProvider } from './src/contexts/Movie/MovieProvider';
import { MovieDetailsProvider } from './src/contexts/MovieDetails/MovieDetailsProvider';
import { FiltroProvider } from './src/contexts/Filtro/FiltroProvider';
import { SeriesProvider } from './src/contexts/Series/SeriesProvider';
import { SeriesDetailsProvider } from './src/contexts/SeriesDetails/SeriesDetailsProvider';
import { EpisodesProvider } from './src/contexts/Episodes/EpisodesProvider';
import ContextBuilder from './src/contexts/utils/ContextBuilder';
import Routes from './src/routes/rotas';

const ContextContainer = ContextBuilder([
  MovieProvider,
  MovieDetailsProvider,
  FiltroProvider,
  SeriesProvider,
  SeriesDetailsProvider,
  EpisodesProvider,
]);

export default function App() {
  return (
    <NavigationContainer>
      <ContextContainer>
        <Routes />
      </ContextContainer>
    </NavigationContainer>
  );
}