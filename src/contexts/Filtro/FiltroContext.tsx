import React from "react";
import { IFiltroProvider } from "../../dto/contexts/iFiltroProvider";

const FiltroContext = React.createContext<IFiltroProvider>(null);

export { FiltroContext };
