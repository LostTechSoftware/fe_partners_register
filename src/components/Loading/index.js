import styles from './styles.module.css'
import loader from '../../assets/loader.svg'

export default function Loading(){
  return(
    <section className={styles.LoadingCointainer}>
      <img src={loader} className={styles.loader} alt=""/>
    </section>
  )
}