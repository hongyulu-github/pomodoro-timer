import React from 'react'
import { changeTimeFormat } from '../../service'
import { turns } from '../../service'
import './Timer.css'

const Timer = ({currentTurn, btnText, currentTime}) => {
  let currentTurnTime = turns.filter(turn => turn.name === currentTurn)[0].time
  return (
    <div className='timer-container flex-center-col'>
        <h3 className=''>{currentTurn === "break"?"A new break has begun":"Session"}</h3>
        <h4>{btnText}</h4>
        <div className='countdown-timer'>
        {currentTime === ""?changeTimeFormat(currentTurnTime):currentTime}
        </div>
        <div className='btns'>
        <button id="start-stop">{btnText === "Start" || btnText === "Resume"?<i className="fa-solid fa-play"></i>:<i className="fa-solid fa-pause"></i>}</button>
        <button id="reset"><i className="fa-solid fa-arrows-rotate"></i></button>
        </div>
        
    </div>
  )
}

export default Timer