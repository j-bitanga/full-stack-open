import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.click}>{props.text}</button>
)

const Statistic = (props) => {
  return (
  <p>{props.text} {props.value}</p>
  )
}

 
const Statistics = (props) => {
  const total = props.good + props.bad + props.neutral
  const average = total / 3
  const positive = props.good / (props.bad + props.neutral)
  if (total === 0) {
    return (
      <h1>No feedback given</h1>
    )
  }
    return (
      
    <tbody>
      <table>
      <tr>
      <td><Statistic text='Good' value={props.good}/></td>
      </tr>
      <tr>
      <td><Statistic text='Neutral' value={props.neutral}/></td>
      </tr>
      <tr>
      <td><Statistic text='Bad' value={props.bad}/></td>
      </tr>
      <tr>
      <td>average {average}</td>
      </tr>
      <tr>
      <td>positive {positive}</td>
      </tr>
      </table>
    </tbody>
    )

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <h1>Please leave feedback</h1>
     <h2>Stats</h2>
    <Button click={() => setGood(good + 1)} text='good'/>
    <Button click={() => setNeutral(neutral + 1)} text='neutral'/>
    <Button click={() => setBad (bad + 1)} text='bad'/>
    <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)