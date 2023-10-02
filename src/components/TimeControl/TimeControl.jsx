import React from 'react'
import styles from './TimeControl.module.css'

const TimeControl = ({onIncrement,onDecrement,turns}) => {
  return (
    <div className={`${styles.timeControlContainer} flex-center-col`}>
      
        <h1 className={styles.timeControlTitle}>Pomodoro Timer</h1>
        <div className={`${styles.timeControl} flex-center`}>
            { turns.map(turn => (
             <div className='turn-container flex-center-col' key={turn.name}>
                <p id={turn.name + 'Label'} className={styles.turnLabel}>{turn.name} Length</p>
                <p id={turn.name + 'Length'} className={styles.turnLength}>{turn.time}</p>
                <div className={styles.btns}>
                <button id={turn.name + '-increment'} onClick={()=>onIncrement(turn)}><i className="fa-solid fa-arrow-up"></i></button>
                <button id={turn.name + '-decrement'} onClick={()=>onDecrement(turn)}><i className="fa-solid fa-arrow-down"></i></button>
                </div>
               
             </div>
            ))}
      

      </div>
       


    </div>
  )
}

export default TimeControl