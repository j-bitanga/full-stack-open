import React from 'react'

const Total = (props) => {
    const content = props.exercises
    var totals = content.reduce((sum, arr) => sum + arr.exercises, 0)

    
    
    return (
       <>
      Total of exercises is {totals}
       </>
    )
}

export default Total