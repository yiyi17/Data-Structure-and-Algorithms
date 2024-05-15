import { useState } from 'react';
import './App.css';

/**
 * 
 * @returns 
 * setState 函数的情况：初始化、更新，有点意思
 */
function App() {
  const fn = () => {
    console.log('fn called');
    return 0
  }
  // fn will be called only once，and the return value will be the initial value of count
 
  // if you want to call fn every time the component re-renders, you can use the following code useState(fn())
 
  const [count, setCount] = useState(fn)
  const handleClick = () => {
    setCount((prev) => prev + 1)
  }
  return (
    <>
      <button onClick={handleClick}>click me</button>
      <p>{count}</p>
    </>
  )
}

export default App
