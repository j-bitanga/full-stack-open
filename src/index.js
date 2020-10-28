import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    console.log(good)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    console.log(neutral)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    console.log(bad)
  }

  return (
    <div>
    <h1>Please leave feedback</h1>
     <Button onClick={handleGood} text='good'/>
     <Button onClick={handleNeutral} text='neutral'/>
     <Button onClick={handleBad} text='bad'/>
     <h2>Stats</h2>
     Good: {good}<br></br>
     Neutral: {neutral}<br></br>
     Bad: {bad}<br></br>
    Total: {total}<br></br>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)