import { useState } from "react"
import { Btn } from "./components/button/btn"

export function App() {

  const [valores, setValores] = useState('4')

  function addvalor(valor) {
    setValores(prevValores => prevValores + valor)
  }

  const listaValores = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '=', '+', '-', '*', '/']
  
  return (
    <div className="calculadora">

      <div className="calculos-box">
        <p id="calculos">{valores}</p>
      </div>

      <div className="botoes">

        {listaValores.map( (item) => {
          return <Btn key={item} valor={item}></Btn>
        } )}

      </div>
    </div>
  )
}


