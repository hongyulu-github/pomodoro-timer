import { useState } from 'react'
import './App.css'
import TimeControl from './components/TimeControl/TimeControl'
import RandomQuote from './components/RandomQuote/RandomQuote'
import { changeTimeFormat } from './service'
import Timer from './components/Timer/Timer'

function App() {
  
  const [currentTurn, serCurrentTurn] = useState("Pomodoro")
  const [btnText, serbtnText] = useState("Start")
  const [currentTime, serCurrentTime] = useState("")




  return (
    <>
      <section className='top flex-center'>
        
        <div className='timer-box card'>
          <TimeControl/>
          <Timer currentTurn={currentTurn} currentTime={currentTime} btnText={btnText} />

        </div>
        <div className='todoList-box'></div>

      
      </section>
      <section className='bottom'>
      <RandomQuote/>
      </section>

      
      

 
    </>
  )
}

export default App
