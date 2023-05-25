import styles from './btnop.module.css'

import { Contexto } from '../../context/contexto'
import { useContext } from 'react'

export function BtnOp({ valor}) {

  const { atualizarEstado } = useContext(Contexto)

  return (
    <button onClick={() => atualizarEstado(` ${valor} `)}  className={styles.button}>{valor}</button>
  )
}