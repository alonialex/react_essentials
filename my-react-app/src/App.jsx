import './App.css'
import { useState, useEffect } from 'react'


// const cities = ["Tokyo","Nirobi","Asmara"]
// const [firstCity,secondCity]=["Tokyo","Nirobi","Asmara"] 
// console.log(firstCity)
// console.log(secondCity)


function App() {
  const[emotion,setEmotion] = useState("happy")
  const[secondary,setSecondary] = useState("tired")
  useEffect(() =>{
    console.log(`It is ${emotion} here`)
  },[emotion])

  useEffect(() =>{
    console.log(`It is ${secondary} here`)
  },[secondary])
  return (
    <>
    <p>Current emotion is {emotion}</p>
    <button onClick={() => setEmotion("Sad")}>Sad</button>
    <button onClick={() => setEmotion("Excited")}>Excited</button>
    <p>Current emotion is {secondary}</p>
    <button onClick={() => setSecondary("Grateful")}>Grateful</button>
    </>
  )
}

export default App
