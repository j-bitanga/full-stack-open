import React from 'react';
import Content from './Content'


const Course = (props) => {
  const halfStack = props.course[0]
  const nodeJs = props.course[1]
  const names = props.course.map((x) => x.name)
    
  return (
      <div>
        <Content halfStack={halfStack} nodeJs={nodeJs} names={names}/>
      </div>
    )
  }

 export default Course