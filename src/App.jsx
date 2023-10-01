import { useState } from 'react'
import './App.css'
import TimeControl from './components/TimeControl/TimeControl'
import RandomQuote from './components/RandomQuote/RandomQuote'
import { changeTimeFormat } from './service'
import Timer from './components/Timer/Timer'

function App() {
  
  const [currentTurn, setCurrentTurn] = useState("Pomodoro")
  const [btnText, setbtnText] = useState("Start")
  const [currentTime, setCurrentTime] = useState("")
  const [turns,setTurns] = useState([
    {name:"Break", time: 5},
    {name:"Pomodoro", time: 25},
])
  const [paused, setPaused] = useState(true)


  //functions
  const handleIncrement =(turn) => {
    let index = turns.indexOf(turn)
    if(turns[index].time < 60)
       setTurns(turns.map(item => turns.indexOf(item) === index ? {...item, time: turn.time + 1 }:item ))
  } 

  const handleDecrement = (turn) =>{
    let index = turns.indexOf(turn)
    if(turns[index].time > 1)
       setTurns(turns.map(item => turns.indexOf(item) === index ? {...item, time: turn.time - 1 }:item ))
  }

  const handleReset = () => {
    setCurrentTurn('Pomodoro');
    setbtnText("Start");
    setCurrentTime("");
    setTurns([
      {name:"Break", time: 5},
      {name:"Pomodoro", time: 25},
  ])
  }

  const handleStartStop =()=>{
  let currentTurnTime = turns.filter(turn => turn.name === currentTurn)[0].time

  if(btnText === "Start"){
    setPaused(false);
    setbtnText("Pause")
  }

   




  } // end of handleStartStop function


  return (
    <>
      <section className='top flex-center'>
        
        <div className='timer-box card'>
          <TimeControl onIncrement={handleIncrement} onDecrement={handleDecrement} turns={turns} />
          <Timer currentTurn={currentTurn} currentTime={currentTime} btnText={btnText} onReset={handleReset}/>

        </div>
        <div className='todoList-box'></div>

      
      </section>
      <section className='bottom'>
      <RandomQuote/>
      </section>

      
      

      <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
    </>
  )
}

export default App
