import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import Loading from '../../components/Loading';
import iconFoodZilla from '../../assets/iconFoodZilla.svg';
import styles from './styles.module.css';


export default function Login(){
  const history = useHistory();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const handleLogin = async event => {
    event.preventDefault();
    if(loading)
      return;
      
    setLoading(true)
    try {
      console.log('submit')
      console.log(email)
      console.log(password)
      
      // const response = await api.post('/', {
      //   email,
      //   password
      // });
      
      
      // sessionStorage.setItem('token', token);
      
      setTimeout(() => setLoading(false), 3000) 
      history.push('/TwoFactorAuthentication');
    } catch (error) {
      console.error('log error:');
      console.error(error);
      setLoading(false)
    }
  }

  return(
    <section className={styles.LoginCointainer}>
      <img className={styles.foodZilla} src={iconFoodZilla} alt=""/>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>

        <h2>Email</h2>        
        <input
          disabled={loading}
          type="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="Enter your email"
          required
        />
        
        <h2>Password</h2>
        <input
          disabled={loading}
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder="Password"
          required
        />

        <button type="submit" className={loading ? styles.disabledButton : {}}>
          {loading ? <Loading /> : "Entrar"}
        </button>
      </form>
    </section>
  )
}
