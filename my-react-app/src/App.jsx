import './App.css'
import { useState, useEffect } from 'react'


// const cities = ["Tokyo","Nirobi","Asmara"]
// const [firstCity,secondCity]=["Tokyo","Nirobi","Asmara"] 
// console.log(firstCity)
// console.log(secondCity)


function App() {
  const[emotion,setEmotion] = useState("happy")

  useEffect(() =>{
    console.log(`It is ${emotion} here`)
  },[emotion])
  return (
    <>
    <p>Current emotion is {emotion}</p>
    <button onClick={() => setEmotion("Sad")}>Sad</button>
    <button onClick={() => setEmotion("Excited")}>Excited</button>

    </>
  )
}

export default App
