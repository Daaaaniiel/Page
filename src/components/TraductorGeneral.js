import React, { createContext, useContext, useState } from "react";

const IdiomaContext = createContext();
export const useIdioma = () => useContext(IdiomaContext);

const traducirTexto = async (texto) => {
  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=es|qu`
  );
  const data = await response.json();
  return data.responseData.translatedText;
};

export const IdiomaProvider = ({ children }) => {
  const [traducido, setTraducido] = useState(false);
  const [traducciones, setTraducciones] = useState({});

  const traducirPagina = async (textos) => {
    const nuevasTraducciones = {};
    for (const clave in textos) {
      nuevasTraducciones[clave] = await traducirTexto(textos[clave]);
    }
    setTraducciones(nuevasTraducciones);
    setTraducido(true);
  };

  const cambiarIdioma = async (textos) => {
    if (traducido) {
      setTraducido(false);
      setTraducciones({});
    } else {
      await traducirPagina(textos);
    }
  };

  return (
    <IdiomaContext.Provider value={{ traducido, traducciones, traducirPagina, cambiarIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
};

export const BotonTraducir = ({ textos }) => {
  const { traducirPagina } = useIdioma();

  return (
    <div className="text-end p-3">
      <button
        className="btn btn-outline-secondary"
        onClick={() => traducirPagina(textos)}
      >
        Traducir al Kichwa
      </button>
    </div>
  );
};
