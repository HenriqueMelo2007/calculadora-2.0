import { useState } from "react";
import { createContext } from "react";

export const Contexto = createContext()

export function ProvedorContexto ( { children }) {

  const [estado, setEstado] = useState('')

  const atualizarEstado = (novoEstado) => setEstado(prevEstado => prevEstado + novoEstado)

  const calcularEstado = (estado) => {
    const resultado = eval(estado)
    setEstado(resultado)
  }
  
  const valorContexto = {
    estado,
    atualizarEstado,
    calcularEstado,
  }

  return (

    <Contexto.Provider value={valorContexto}>
      {children}
    </Contexto.Provider>

  )
}