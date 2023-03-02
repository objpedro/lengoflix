import React from 'react';
import { ISeriesProvider } from '../../dto/contexts/iSeriesProvider';

const SeriesContext = React.createContext<ISeriesProvider>(null);

export { SeriesContext };