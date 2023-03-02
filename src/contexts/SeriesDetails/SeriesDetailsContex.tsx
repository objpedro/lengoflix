import React from 'react';
import { ISeriesDetailsProvider } from '../../dto/contexts/iSeriesDetailsProvider';

const SeriesDetailsContext = React.createContext<ISeriesDetailsProvider>(null);

export { SeriesDetailsContext };