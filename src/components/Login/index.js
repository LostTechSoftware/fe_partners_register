import styles from './styles.module.css'
import iconFoodZilla from '../../assets/iconFoodZilla.svg'

export default function Login(){
  return(
    <section className={styles.LoginCointainer}>
      <img className={styles.foodZilla} src={iconFoodZilla} alt=""/>
      <form action="">
        <h1>Login</h1>
        <h2>Email</h2>
        <input 
          type="Email"
          placeholder="Enter your email"
          required/>
        <h2>Password</h2>
        <input type="password" name="" id="" placeholder="Password"/>
        <button 
          type="submit"
        >
          Enter
        </button>
       
      </form>
    </section>
  )
}