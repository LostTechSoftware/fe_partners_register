import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import Loading from '../../components/Loading';
import iconFoodZilla from '../../assets/iconFoodZilla.svg'
import Switch from '../../components/Switch'
import filePlus from '../../assets/Feather-core-file-plus.png'
import styles from './styles.module.css'

export default function InformationRecord(){
  const history = useHistory();

  const [ loading, setLoading ] = useState(false)

  const [ cep, setCep ] = useState('');
  const [ district, setDistrict ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ number, setNumber ] = useState('');

  const [ restauranteName, setRestauranteName ] = useState('');
  const [ city, setCity ] = useState('');
  const [ state, setState ] = useState('');
  const [ deliveryTime, setDeliveryTime ] = useState('');

  const [ feeBy3Km, setFeeBy3Km ] = useState('');
  const [ feeBy5Km, setFeeBy5Km ] = useState('');
  const [ feeBy7Km, setFeeBy7Km ] = useState('');
  const [ feeBy9Km, setFeeBy9Km ] = useState('');

  const [ cardPayment, setCardPayment ] = useState(false);
  const [ moneyPayment, setMoneyPayment ] = useState(false);
  const [ onlinePayment, setOnlinePayment ] = useState(false);

  const handleNewRestaurantRequest = async event => {
    event.preventDefault();
    if(loading)
      return;
      
    setLoading(true)
    try {
      console.log('submit')

      const email = sessionStorage.getItem('newRestaurantEmail');
      const password = sessionStorage.getItem('newRestaurantPassword');
      const cnpj = sessionStorage.getItem('newRestaurantCnpj');
      // const ownerName= sessionStorage.getItem('newRestaurantOwnerName');
      
      // const response = await api.post('/', {
      //   email,
      //   password,
      //   cnpj,
      //   ownerName,

      //   // logo,
        
      //   cep,
      //   district,
      //   address,
      //   number,
      //   restauranteName,
      //   city,
      //   state,
      //   deliveryTime,
        
      //   feeBy3Km,
      //   feeBy5Km,
      //   feeBy7Km,
      //   feeBy9Km,

      //   cardPayment,
      //   moneyPayment,
      //   onlinePayment,
      // });      
      
      setTimeout(() => {
        setLoading(false)
        history.push('/RegistrationOfEstablishments');
      }, 3000);
    } catch (error) {
      console.error('log error:');
      console.error(error);
      setLoading(false)
    }
  }
  
  return(
    <form
      onSubmit={handleNewRestaurantRequest}
      className={styles.InformationRecordCointainer}
    >
      <header>
        <h1>Informações do estabelecimento*</h1>
        <div className={styles.filePlusContainer}>
          <div>
            <input type="file" accept="image/*"/>
            <img src={filePlus} alt=""/>
          </div>
          <h2>Logo</h2>
        </div>
      </header>
      <main>
        <div className={styles.dataContainer}>
          <h2>Cep</h2>
          <input
            type="text"
            placeholder="Type something..."
            value={cep}
            onChange={event => setCep(event.target.value)}
            className={styles.text}
          />

          <h2>Bairro</h2>
          <input
            type="text"
            placeholder="Type something..."
            value={district}
            onChange={event => setDistrict(event.target.value)}
            className={styles.text}
          />

          <h2>Endereço</h2>
          <input
            type="text"
            placeholder="Type something..."
            value={address}
            onChange={event => setAddress(event.target.value)}
            className={styles.text}
          />

          <h2>N°</h2>
          <input
            type="number"
            placeholder="Type something..."
            value={number}
            onChange={event => setNumber(event.target.value)}
            className={styles.text}
          />
        </div>
        <div className={styles.dataContainer}>
          <h2>Nome</h2>
          <input
            type="text"
            placeholder="Type something..."
            value={restauranteName}
            onChange={event => setRestauranteName(event.target.value)}
            className={styles.text}
          />

          <h2>Cidade</h2>
          <input
            type="text"
            placeholder="Type something..."
            value={city}
            onChange={event => setCity(event.target.value)}
            className={styles.text}
          />

          <h2>Estado</h2>
          <input
            type="text"
            placeholder="Type something..."
            value={state}
            onChange={event => setState(event.target.value)}
            className={styles.text}
          />

          <h2>Tempo de entrega</h2>
          <input
            type="text"
            placeholder="Type something..."
            value={deliveryTime}
            onChange={event => setDeliveryTime(event.target.value)}
            className={styles.text}
          />
        </div>
        <div className={[styles.dataContainer, styles.dataContainer3].join(" ")}>
          <div className={styles.Switch}>
            <Switch
              switchText="Cartão"
              isChecked={cardPayment}
              setIsChecked={setCardPayment}
            />
          </div>
          <div className={styles.Switch}>
            <Switch
              switchText="Dinheiro"
              isChecked={moneyPayment}
              setIsChecked={setMoneyPayment}
            />
          </div>
          <div className={styles.Switch}>
            <Switch
              switchText="Pagamento online"
              isChecked={onlinePayment}
              setIsChecked={setOnlinePayment}
            />
          </div>

          <div className={styles.inputContainer}>
            <div>
              <input
                type="number"
                value={feeBy3Km}
                onChange={event => setFeeBy3Km(event.target.value)}
                placeholder="R$ 2,00"
              />
              <h2>3 km</h2>
            </div>
            <div>
              <input
                type="number"
                value={feeBy5Km}
                onChange={event => setFeeBy5Km(event.target.value)}
                placeholder="R$ 2,00"
              />
              <h2>5 km</h2>
            </div>
            <div>
              <input
                type="number"
                value={feeBy7Km}
                onChange={event => setFeeBy7Km(event.target.value)}
                placeholder="R$ 2,00"
              />
              <h2>7 km</h2>
            </div>
            <div>
              <input
                type="number"
                value={feeBy9Km}
                onChange={event => setFeeBy9Km(event.target.value)}
                placeholder="R$ 2,00"
              />
              <h2>9 km</h2>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <img src={iconFoodZilla} alt=""/>
        <button type="submit" className={loading ? styles.disabledButton : {}}>
          {loading ? <Loading /> : "Salvar"}
        </button>
      </footer>
    </form>
  )
}
