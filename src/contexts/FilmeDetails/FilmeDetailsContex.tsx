import React from 'react';
import { IFilmeDetailsProvider } from "../../dto/contexts/IFilmeDetailsProvider";

const FilmeDetailsContext = React.createContext<IFilmeDetailsProvider>(null);

export { FilmeDetailsContext };