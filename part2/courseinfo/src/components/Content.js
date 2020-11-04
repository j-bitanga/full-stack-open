import React from 'react';
import Part from './Part'

const Content = (props) => {
    const parts = props.content
    return (
        <div>
            <ul>
                {parts.map(part =>
                        <Part key={part.id} name={part.name} exercises={part.exercises}  />          
                    )}
            </ul>
        </div>
        
    )
}

export default Content