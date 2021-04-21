import styles from './styles.module.css'
import iconFoodZilla from '../../assets/iconFoodZilla.svg'
import Switch from '../Switch'
import filePlus from '../../assets/Feather-core-file-plus.png'

  
export default function InformationRecord(){
  
  return(
    <section className={styles.InformationRecordCointainer}>
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
          <input type="text" placeholder="Type something..." className={styles.text}/>
          <h2>Bairro</h2>
          <input type="text" placeholder="Type something..." className={styles.text}/>
          <h2>Endereço</h2>
          <input type="text" placeholder="Type something..." className={styles.text}/>
          <h2>N°</h2>
          <input type="text" placeholder="Type something..." className={styles.text}/>
        </div>
        <div className={styles.dataContainer}>
          <h2>Nome</h2>
          <input type="text" placeholder="Type something..." className={styles.text}/>
          <h2>Cidade</h2>
          <input type="text" placeholder="Type something..." className={styles.text}/>
          <h2>Estado</h2>
          <input type="text" placeholder="Type something..." className={styles.text}/>
          <h2>Tempo de entrega</h2>
          <input type="text" placeholder="Type something..." className={styles.text}/>
        </div>
        <div className={[styles.dataContainer, styles.dataContainer3].join(" ")}>
          <div className={styles.Switch}>
            <Switch switchText="Cartão"/>
          </div>
          <div className={styles.Switch}>
            <Switch switchText="Dinheiro"/>
          </div>
          <div className={styles.Switch}>
            <Switch switchText="Pagamento online"/>
          </div>

          <div className={styles.inputContainer}>
            <div>
              <input type="number" placeholder=" R$ 2,00"/>
              <h2>3 km</h2>
            </div>
            <div>
              <input type="number" placeholder=" R$ 2,00"/>
              <h2>5 km</h2>
            </div>
            <div>
              <input type="number" placeholder=" R$ 2,00"/>
              <h2>7 km</h2>
            </div>
            <div>
              <input type="number" placeholder=" R$ 2,00"/>
              <h2>9 km</h2>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <img src={iconFoodZilla} alt=""/>
        <button>Salvar</button>
      </footer>
    </section>
  )
}