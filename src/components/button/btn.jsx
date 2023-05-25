import styles from './btn.module.css'

import { Contexto } from '../../context/contexto'
import { useContext } from 'react'

export function Btn({ valor}) {

  const { atualizarEstado } = useContext(Contexto)

  return (
    <button onClick={() => atualizarEstado(valor)}  className={styles.button}>{valor}</button>
  )
}