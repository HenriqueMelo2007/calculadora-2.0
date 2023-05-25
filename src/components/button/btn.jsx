import styles from './btn.module.css'

import { Contexto } from '../../context/contexto'
import { useContext } from 'react'

export function Btn({ valor}) {

  const { estado, atualizarEstado } = useContext(Contexto)

  return (

    <button className={styles.button}>{valor}</button>
  )
}