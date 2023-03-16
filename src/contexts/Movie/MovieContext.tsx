import React from 'react';
import { IMovieProvider } from "../../dto/contexts/iMovieProvider";

const MovieContext = React.createContext<IMovieProvider>(null);

export { MovieContext };