import React from 'react'
import {turns} from '../../service'
import './TimeControl.css'

const TimeControl = () => {
  return (
    <div className='timeControl-container flex-center-col'>
      
        <h1 className='timeControl-title'>Pomodoro Timer</h1>
        <div className='timeControl flex-center'>
            { turns.map(turn => (
             <div className='turn-container flex-center-col' key={turn.name}>
                <p id={turn.name + '-label'} className='turn-label'>{turn.name} Length</p>
                <p id={turn.name + '-length'} className='turn-length'>{turn.time}</p>
                <div className='btns'>
                <button id={turn.name + '-increment'}><i className="fa-solid fa-arrow-up"></i></button>
                <button id={turn.name + '-decrement'}><i className="fa-solid fa-arrow-down"></i></button>
                </div>
               
             </div>
            ))}
      

      </div>
       


    </div>
  )
}

export default TimeControl