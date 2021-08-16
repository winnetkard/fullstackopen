import React from 'react'
import Part from './Part'
import Reduce from './Reduce'

const Content = ({ content }) => {
  return (
      <ul>
          {
            content.map(part => <Part key = {part.id} part = {part} />)
          }

          {
            <Reduce content = {content} />
          }
      </ul> 
  )
}

export default Content
