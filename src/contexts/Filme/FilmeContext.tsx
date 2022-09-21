import React from 'react';
import { iFilmeProvider } from '../../dto/contexts/iFilmeProvider';

const FilmeContext = React.createContext<iFilmeProvider>(null);

export { FilmeContext }