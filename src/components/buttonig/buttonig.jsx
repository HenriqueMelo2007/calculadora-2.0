import styles from './buttonig.module.css'

import { Contexto } from '../../context/contexto'
import { useContext } from 'react'

export function BtnIg({ valor}) {

  const { estado, calcularEstado } = useContext(Contexto)

  return (
    <button onClick={() => calcularEstado(estado)}  className={styles.button}>{valor}</button>
  )
}