import { useState, useEffect} from 'react'
import './App.css'
import TimeControl from './components/TimeControl/TimeControl'
import RandomQuote from './components/RandomQuote/RandomQuote'
import Timer from './components/Timer/Timer'

function App() {
  
  const [currentTurn, setCurrentTurn] = useState("Pomodoro")
  const [btnText, setbtnText] = useState("Start")
 // const [currentTime, setCurrentTime] = useState("")
  const [turns,setTurns] = useState([
    {name:"Break", time: 5},
    {name:"Pomodoro", time: 25},
])
  const [paused, setPaused] = useState(true)
  const [countdown,setCountdown] = useState(null)

  const [currentTurnTime, setCurrentTurnTime] = useState(turns.find(turn => turn.name === currentTurn)?.time || 0)
  useEffect(()=>{
      setCurrentTurnTime(turns.find(turn => turn.name === currentTurn)?.time)
  },[turns])

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
    clearInterval(countdown)
    setCountdown(null)
    setCurrentTurn('Pomodoro');
    setbtnText("Start");
   // setCurrentTime("");
    setTurns([
      {name:"Break", time: 5},
      {name:"Pomodoro", time: 25},
  ])
    setCurrentTurnTime(turns.find(turn => turn.name === currentTurn)?.time || 0)

  }

  const handleStartStop = () => {

    

    if(btnText ==="Start" || btnText === "Resume"){
      setPaused(false);
      setbtnText('Pause')
      


      setCountdown(setInterval(() => {
        if(currentTurnTime*60 < 1){ // why interval not checking this condition and trigger the function inside when it hits zero
          const audioEle = document.getElementById('beep')
          audioEle.play()
          setCurrentTurn(currentTurn === "Pomodoro"? "Break":"Pomodoro") 
          setCurrentTurnTime((turns.find(turn => turn.name === (currentTurn=== "Pomodoro"? "Break":"Pomodoro")).time))    
          console.log("less than 1" + currentTurn)  
             
        } else if (currentTurnTime*60 >= 1){
          setCurrentTurnTime(prevTime => (prevTime*60-1)/60) // why the currentTurnTime, when loged is not changes but rendered is changed
          console.log(currentTurnTime) 
        }
      }, 1000));


      //cd

    } else if (btnText === "Pause"){
      setPaused(true)
      setbtnText('Resume')

      if (countdown) {
        clearInterval(countdown)
        setCountdown(null)
        
      }
    }

    
   
   
  };// end of handleStartStop function


  return (
    <>
      <section className='top flex-center'>
        
        <div className='timer-box card'>
          <TimeControl onIncrement={handleIncrement} onDecrement={handleDecrement} turns={turns} />
          <Timer currentTurn={currentTurn} currentTurnTime={currentTurnTime} btnText={btnText} onReset={handleReset} onStartStop={handleStartStop}/>

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
