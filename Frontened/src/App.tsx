import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    async function fetchData(){
      
      const data =await fetch("");
      //const dt=data.json();
      console.log(data)
    }
    console.log(1)
    fetchData()
  },[])

  return (
    <>
      <div>
        {count}
        <button onClick={()=>{setCount(count+1)}}>Click</button>
      </div>
      
    </>
  )
}

export default App
