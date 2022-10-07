import React from "react";
import { IFiltro } from "../../dto/contexts/iFiltroProvider";

const FiltroContext = React.createContext<IFiltro>(null);

export { FiltroContext };
