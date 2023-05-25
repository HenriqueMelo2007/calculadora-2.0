import { useContext } from "react"
import { Btn } from "./components/button/btn"
import { Contexto } from "./context/contexto"

export function App() {

  const { estado } = useContext(Contexto)

  const listaValores = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '=', '+', '-', '*', '/']
  
  return (

    <div className="calculadora">

      <div className="calculos-box">
        <p id="calculos">{estado}</p>
      </div>

      <div className="botoes">

        {listaValores.map( (item) => {
           return <Btn key={item} valor={item}></Btn>
        } )}

      </div>
    </div>

  )
}


