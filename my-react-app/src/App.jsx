import './App.css'
import { useReducer } from 'react'


// const cities = ["Tokyo","Nirobi","Asmara"]
// const [firstCity,secondCity]=["Tokyo","Nirobi","Asmara"] 
// console.log(firstCity)
// console.log(secondCity)


function App() {
  const[checked,setChecked] = useReducer((checked) => !checked)
  console.log(checked)

  return (
    <>
    <input type="checkbox" value={checked} onChange={setChecked}/>
    <label htmlFor="">{checked ? "checked" : "not checked"}</label>


    </> 
  )
}

export default App
