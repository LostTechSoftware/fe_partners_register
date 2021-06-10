import styles from './styles.module.css'
import godzilla from '../../assets/godzilla-destroys-city_52422-171.jpg'
export default function Crashed(){
  return(
    <section className={styles.CrashedCointainer}>
      <img src={godzilla} alt=""/>
      <span>
        <p className={styles.text1}>Opsss....</p>
        <p className={styles.text2}>Algo deu errado = (</p>
      </span>
    </section>
  )
}