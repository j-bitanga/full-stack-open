import React from 'react';
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {
  const header = props.course.name
  const content = props.course.parts

    
  return (
      <div>
        {console.log('node is', header)}
        <Header header={header} />
        <Content content={content} />
        <Total content={content} />
      </div>
    )
  }

 export default Course