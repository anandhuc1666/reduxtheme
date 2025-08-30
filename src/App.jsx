import React from 'react'
import { increment,decrement, setTheme } from './counter/CountSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  const theme = useSelector((state)=>state.theme.color)

  return (
    <div style={{ backgroundColor: theme, padding: "20px",color: theme === "yellow" ? "black" : "white" }}>
         <h1>count: {count}</h1>
         <button onClick={()=>dispatch(increment())}>+</button>
         <button onClick={()=>dispatch(decrement())}>-</button>
         <button onClick={()=>dispatch(setTheme())}>Theme</button>
    </div>
  )
}

export default App