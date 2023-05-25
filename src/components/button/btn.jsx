import styles from './btn.module.css'

export function Btn({ valor }) {

  return (
    <button className={styles.button}>{valor}</button>
  )
}