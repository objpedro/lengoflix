import React from "react";
import { FilmeContext } from "./filmeContext";

return (
    <FilmeContext.Provider value={FilmesProviderValue}>
        {props.children}
    </FilmeContext.Provider>
)