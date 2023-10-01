export const turns = [
    {name:"Break", time: 5},
    {name:"Pomodoro", time: 25},
]

export const changeTimeFormat = (num) =>{
    num = num * 60000 ///num en minuto
    let minutes = Math.floor((num % (1000 * 60 * 60)) / (1000 * 60))<10?"0"+Math.floor((num % (1000 * 60 * 60)) / (1000 * 60)):Math.floor((num % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((num % (1000 * 60)) / 1000)<10?"0"+Math.floor((num % (1000 * 60)) / 1000):Math.floor((num % (1000 * 60)) / 1000);
    num = minutes+":"+seconds
    return num
  } 