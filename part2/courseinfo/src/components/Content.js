import React from 'react';
import Part from './Part'
import Header from './Header'
import Total from './Total'

const Content = (props) => {
    const halfStack = props.halfStack.parts
    const nodeJs = props.nodeJs.parts
    const headerStack = props.names[0]
    const headerNode = props.names[1]

    return (

        <div>
            <Header header={headerStack}/>
            <ul>
                {halfStack.map(stack =>
                        <Part key={stack.id} name={stack.name} exercises={stack.exercises}  />      
                    )}
                    <Total exercises={halfStack}/>
                    
            </ul>
            
            <Header header={headerNode}/>
            <ul>
                {nodeJs.map(node =>
                        <Part key={node.id} name={node.name} exercises={node.exercises}  /> 
                    )}
                    <Total exercises={nodeJs} />
            </ul>
            
        </div>
        
    )
}

export default Content