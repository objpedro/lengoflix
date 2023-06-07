import React from 'react';
import { IUserProvider } from "../../dto/contexts/IUserProvider";

const UserContext = React.createContext<IUserProvider>(null);

export { UserContext };