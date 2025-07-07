import React from 'react';
import { IEpisodesProvider } from '../../dto/contexts/iEpisodesProvider';

const EpisodesContext = React.createContext<IEpisodesProvider>(null);

export { EpisodesContext };