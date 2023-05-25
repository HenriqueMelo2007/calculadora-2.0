import { useContext } from "react"
import { Btn } from "./components/button/btn"
import { BtnOp } from "./components/buttonop/btnop"
import { Contexto } from "./context/contexto"
import { BtnIg } from "./components/buttonig/buttonig"

export function App() {

  const { estado } = useContext(Contexto)

  const listaValores = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
  const listaOperacoes = ['+', '-', '*', '/']
  const igualdade = '='
  
  return (

    <div className="calculadora">

      <div className="calculos-box">
        <p id="calculos">{estado}</p>
      </div>

      <div className="botoes">

        {listaValores.map( (item) => {
           return <Btn key={item} valor={item}></Btn>
        } )}

        <BtnIg valor={igualdade}></BtnIg>

        {listaOperacoes.map( (item) => {
           return <BtnOp key={item} valor={item}></BtnOp>
        } )}

      </div>
    </div>

  )
}


