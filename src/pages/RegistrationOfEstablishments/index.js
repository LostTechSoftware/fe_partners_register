import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './styles.module.css'
import iconFoodZilla from '../../assets/iconFoodZilla.svg'

export default function RegistrationOfEstablishments(){
  const history = useHistory();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ cnpj, setCnpj ] = useState('');
  const [ name, setName ] = useState('');

  const handleNewRestaurantFirstStep = async event => {
    event.preventDefault();
      
    try {
      console.log('submit')
      console.log(email)
      console.log(password)
      console.log(cnpj)
      console.log(name)

      sessionStorage.setItem('newRestaurantEmail', email);
      sessionStorage.setItem('newRestaurantPassword', password);
      sessionStorage.setItem('newRestaurantCnpj', cnpj);
      sessionStorage.setItem('newRestaurantOwnerName', name);
      
      history.push('/InformationRecord');
    } catch (error) {
      console.log('log error:');
      console.error(error);
    }
  }

  return(
    <section className={styles.RegistrationOfEstablishmentsCointainer}>
      <h1>Cadastro do Estabelecimento</h1>
      <form>
        <div>
          <h2>E-mail*</h2>
          <input
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
          <h2 className={styles.spaceBetweenComponents}>Senha*</h2>
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />
        </div>
        <div>
          <h2>CNPJ</h2>
          <input
            type="text"
            value={cnpj}
            onChange={event => setCnpj(event.target.value)}
          />
          <h2 className={styles.spaceBetweenComponents}>Nome do proprietário*</h2>
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
        </div>
      </form>
      <div className={styles.bottomSection}>
        <img className={styles.foodZilla} src={iconFoodZilla} alt=""/>
        <button onClick={handleNewRestaurantFirstStep}>
          Continuar
        </button>
      </div>
    </section>
  )
}
