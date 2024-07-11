import './App.css'
import { useRef } from 'react'


// const cities = ["Tokyo","Nirobi","Asmara"]
// const [firstCity,secondCity]=["Tokyo","Nirobi","Asmara"] 
// console.log(firstCity)
// console.log(secondCity)


function App() {
const txtTitle = useRef()
const hexColor = useRef()

const submit = (e) =>{
  e.preventDefault()
  console.log(txtTitle)
  const title= txtTitle.current.value;
  const color = hexColor.current.value;
  alert(`${title}, ${color}`)
  txtTitle.current.value=""
  hexColor.current.value=""

}

  return (
    <>
    <form onSubmit={submit}> 
      <input  ref={txtTitle} type="text" />
      <input ref={hexColor} type="color" />
      <button>ADD</button>
    </form>

    
    


    </> 
  )
}

export default App
