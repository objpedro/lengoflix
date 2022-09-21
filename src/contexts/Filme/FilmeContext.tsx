import React from 'react';
import { IFilmeProvider } from "../../dto/contexts/iFilmeProvider";

const FilmeContext = React.createContext<IFilmeProvider>(null);

export { FilmeContext };