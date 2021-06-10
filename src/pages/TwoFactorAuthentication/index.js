import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import Loading from '../../components/Loading';
import styles from './styles.module.css'
import iconFoodZilla from '../../assets/iconFoodZilla.svg'

export default function TwoFactorAuthentication(){
  const history = useHistory();

  const [ loading, setLoading ] = useState(false);
  const [ twoFactorToken, setTwoFactorToken ] = useState(false);

  const handleTwoFactorToken = async event => {
    event.preventDefault();
    if(loading)
      return;
      
    setLoading(true)
    try {
      console.log('submit')
      console.log(twoFactorToken)
      
      // const response = await api.post('/', {
      //   twoFactorToken,
      // });
      
      // const { token } = response.data;
      
      // sessionStorage.setItem('token', token);
      
      setTimeout(() => setLoading(false), 3000) 
      history.push('/RegistrationOfEstablishments');
    } catch (error) {
      console.error('log error:');
      console.error(error);
      setLoading(false)
    }
  }

  return(
    <section className={styles.TwoFactorAuthenticationCointainer}>
      <img className={styles.foodZilla} src={iconFoodZilla} alt=""/>
      <form onSubmit={handleTwoFactorToken}>
        <h1>Login</h1>
        <h2>Token</h2>
        <input
          disabled={loading}
          type="text"
          placeholder="Token"
          value={twoFactorToken}
          onChange={event => setTwoFactorToken(event.target.value)}
          required
        />
        <button type="submit" className={loading ? styles.disabledButton : {}}>
          {loading ? <Loading /> : "Validar"}
        </button>
      </form>
    </section>
  )
}
