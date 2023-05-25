import styles from './buttonig.module.css'

import { Contexto } from '../../context/contexto'
import { useContext } from 'react'

export function BtnIg({ valor}) {

  const { atualizarEstado } = useContext(Contexto)

  return (
    <button onClick={() => atualizarEstado(valor)}  className={styles.button}>{valor}</button>
  )
}