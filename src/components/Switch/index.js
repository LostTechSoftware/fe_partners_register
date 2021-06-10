import styles from './styles.module.css'

export default function Switch({switchText, isChecked, setIsChecked}){  
  return(
    <div className={styles.SwitchContainer}>
      <label className={styles.Switch}>
        <input 
          type="checkbox" 
          id="inputCheckbox" 
          checked={isChecked}
          onChange = {(event)=>{
            setIsChecked(event.target.checked)
          }}
        />
        <span className={styles.SwitchSpan} />
      </label>
      <h2>{switchText}</h2>
    </div>
  )
}