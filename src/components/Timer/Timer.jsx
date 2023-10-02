import React from 'react'
import { changeTimeFormat } from '../../service'
import styles from './Timer.module.css'



const Timer = ({currentTurn, btnText, onReset, onStartStop, currentTurnTime}) => {

  return (
    <div className={`${styles.timerContainer} flex-center-col`}>
        <h3 className=''>{currentTurn}</h3>
        <h4>{btnText}</h4>
        <div className={styles.countdownTimer}>
          {changeTimeFormat(currentTurnTime)}
       
        </div>
        <div className={styles.btns}>
        <button id="start-stop" onClick={onStartStop}>{btnText === "Start" || btnText === "Resume"?<i className="fa-solid fa-play"></i>:<i className="fa-solid fa-pause"></i>}</button>
        <button id="reset" onClick={onReset}><i className="fa-solid fa-arrows-rotate"></i></button>
        </div>
        
    </div>
  )
}

export default Timer