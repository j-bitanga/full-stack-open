import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const History = (props) => {
  if (props.total === 0) {
    return (
      <h1>No feedback given</h1>
    )
  }
    return (
   <div>
    Good: {props.good}<br></br>
    Neutral: {props.neutral}<br></br>
    Bad: {props.bad}<br></br>
    Total: {props.total}<br></br>
    </div>
    )

}

const Statistics = (props) => {
  
  const handleGood = () => {
    props.setGood(props.good + 1)
    props.setTotal(props.total + 1)
    console.log(props.good)
  }

  const handleNeutral = () => {
    props.setNeutral(props.neutral + 1)
    props.setTotal(props.total + 1)
    console.log(props.neutral)
  }

  const handleBad = () => {
    props.setBad(props.bad + 1)
    props.setTotal(props.total + 1)
    console.log(props.bad)
  }

  return(
    <div>
    <Button onClick={handleGood} text='good'/>
    <Button onClick={handleNeutral} text='neutral'/>
    <Button onClick={handleBad} text='bad'/>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  return (
    <div>
    <h1>Please leave feedback</h1>
     <h2>Stats</h2>
     <Statistics good={good}setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad} total={total} setTotal={setTotal}/>
     <History good={good} neutral={neutral} bad={bad}  total={total} />
    
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)