import React from 'react';
import { IFirebaseProvider } from "../../dto/contexts/IFirebaseProvider";

const FirebaseContext = React.createContext<IFirebaseProvider>(null);

export { FirebaseContext };