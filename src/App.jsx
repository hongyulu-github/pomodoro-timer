import { useState, useEffect, useRef} from 'react'
import './App.css'
import TimeControl from './components/TimeControl/TimeControl'
import RandomQuote from './components/RandomQuote/RandomQuote'
import Timer from './components/Timer/Timer'

function App() {
  

  //states anf refs
  const [currentTurn, setCurrentTurn] = useState("Pomodoro")
  const [btnText, setbtnText] = useState("Start")
  const [paused, setPaused] = useState(true)
  const [turns,setTurns] = useState([
    {name:"Break", time: 0.05},
    {name:"Pomodoro", time: 0.1},
])
  const [currentTurnTime, setCurrentTurnTime] = useState(turns.find(turn => turn.name === currentTurn)?.time || 0)
  useEffect(()=>{
      setCurrentTurnTime(turns.find(turn => turn.name === currentTurn)?.time)
  },[turns])
  const countdownRef = useRef(null)
  useEffect(() => {
    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
    };
  }, []);

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
      // cuidado: condition inside of func. no func inside of condition
      countdownRef.current = setInterval(() => {
        
        setCurrentTurnTime(prevTime => {
          if (prevTime * 60 >= 1) {
            return (prevTime * 60 - 1) / 60;
          } else {
            clearInterval(countdownRef.current);
            countdownRef.current = null;
            
            const audioEle = document.getElementById('beep');
            audioEle.play();

            setPaused(true)
            setbtnText("Start")
            setCurrentTurn(currentTurn === 'Pomodoro' ? 'Break' : 'Pomodoro');
            return turns.find(turn => turn.name === (currentTurn === 'Pomodoro' ? 'Break' : 'Pomodoro')).time;
          }
        });
      }, 1000);
    } else if (btnText === "Pause"){
      setPaused(true)
      setbtnText('Resume')

          if (countdownRef.current) {
            clearInterval(countdownRef.current);
            countdownRef.current = null;
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
