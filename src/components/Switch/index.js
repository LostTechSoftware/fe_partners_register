import React, { useState } from "react"
import styles from './styles.module.css'

export default function Switch({switchText}){
  
  const [isChecked, setIsChecked] = useState(false);
  
  const textbutton = switchText;

  console.log(textbutton)
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
      <h2>{textbutton}</h2>
    </div>
  )
}