import React from 'react'

const Total = (props) => {
    const content = props.content
    var totals = content.reduce((sum, arr) => sum + arr.exercises, 0)
    
    return (
       <>
       Total of {totals} exercises
       </>
    )
}

export default Total