import { useState } from "react"

function MyComponent (props) {
  const [count, setCount] = useState(0)


  const increment = () => {
    setCount(count +1)
  }

  const decrement = () => {
    if (count > 0)
    { 
      setCount(count - 1)
    }
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className = "counter-button" onClick={increment}>increment</button>
      <button className = "counter-button" onClick={decrement}>decrement</button>
      <button className = "counter-button" onClick={reset}>reset</button>
    </div>
  )
}

export default MyComponent