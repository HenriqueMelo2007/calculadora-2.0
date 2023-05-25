import { useState } from "react";
import { createContext } from "react";

export const Contexto = createContext()

export function ProvedorContexto ( { children }) {

  const [estado, setEstado] = useState('')

  const atualizarEstado = (novoEstado) => setEstado(prevEstado => prevEstado + novoEstado)

  const valorContexto = {
    estado,
    atualizarEstado,
  }

  return (

    <Contexto.Provider value={valorContexto}>
      {children}
    </Contexto.Provider>

  )
}