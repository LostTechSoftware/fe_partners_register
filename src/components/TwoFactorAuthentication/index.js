import styles from './styles.module.css'
import iconFoodZilla from '../../assets/iconFoodZilla.svg'

export default function TwoFactorAuthentication(){
  return(
    <section className={styles.TwoFactorAuthenticationCointainer}>
      <img className={styles.foodZilla} src={iconFoodZilla} alt=""/>
      <form action="">
        <h1>Login</h1>
        <h2>Token</h2>
        <input 
          type="text"
          placeholder="Token"
          required/>
        <button 
          type="submit"
        >
          Enter
        </button>
      </form>
    </section>
  )
}
