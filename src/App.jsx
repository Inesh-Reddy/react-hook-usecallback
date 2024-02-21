import { useCallback, useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// useCallback is a React Hook that allows you to cache a function definition between re-renders.
function App() {
  const [count, setCount] = useState(0)

  const passingFunction= useCallback(()=>{
    console.log("passing function")
  },[])

  return (
    <div>
      <MyComponent inputFunction={passingFunction} />
      <button onClick={()=>{
        setCount(count+1)
      }} >counter ({count})</button>
    </div>
  )
}

const MyComponent= memo(({inputFunction})=>{

  console.log("component rendered")

  return <div>
    <button onClick={inputFunction}>component button</button>
  </div>
})

export default App
