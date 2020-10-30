import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.action}>{props.text}</button>
)

const Most = (props) => {

const voteArray = props.votes
let highest = 0
let highestVote = 0
debugger
  for (var i = 0; i <= props.votes.length; i++) {
    
     if (voteArray[i] > highest) {
      highest = voteArray[i]
      highestVote = voteArray.indexOf(highest)
      console.log(highest)
      console.log(highestVote)
    }
    
  }
  return (
    <div>
      <p>{props.anecdotes[highestVote]}</p>
    </div>
  )

}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const anecRandom = Math.round(Math.random() * props.anecdotes.length)
  const fill = Array.apply(null, Array(props.anecdotes.length)).map(Number.prototype.valueOf,0);
  const [votes, setVotes] = useState(fill)
  const copy = [...votes]

  const updateVotes = () => {
    console.log(copy)
    copy[selected] += 1
    setVotes(copy)
  }
  return (

    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}<br></br>
      this has {votes[selected]} votes<br></br>
      <Button action={() => setSelected(anecRandom)}text='Anecdote me!'/>
      <Button action={updateVotes}text='Vote'/> {/* copy needs to be incremented */}
      <h1>Anecdote with the most votes</h1>
      <Most votes={votes} anecdotes={props.anecdotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)