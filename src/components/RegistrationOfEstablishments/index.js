import styles from './styles.module.css'
import iconFoodZilla from '../../assets/iconFoodZilla.svg'

export default function RegistrationOfEstablishments(){
  return(
    <section className={styles.RegistrationOfEstablishmentsCointainer}>
      <h1>Cadastro do Estabelecimento</h1>
      <form action="">
        <div>
          <h2>E-mail*</h2>
          <input type="text" placeholder="Type something..." required/>
          <h2 className={styles.spaceBetweenComponents}>Senha*</h2>
          <input type="text" placeholder="Type something..." required/>
        </div>
        <div>
          <h2>CNPJ</h2>
          <input type="text" placeholder="Type something..."/>
          <h2 className={styles.spaceBetweenComponents}>Nome do proprietário*</h2>
          <input type="text" placeholder="Type something..." required/>
        </div>
      </form>
      <div className={styles.bottomSection}>
        <img className={styles.foodZilla} src={iconFoodZilla} alt=""/>
        <button>
          Continuar
        </button>
      </div>
    </section>
  )
}