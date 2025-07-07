import React from 'react';
import { IMovieDetailsProvider } from "../../dto/contexts/IMovieDetailsProvider";

const MovieDetailsContext = React.createContext<IMovieDetailsProvider>(null);

export { MovieDetailsContext };