import React from 'react'

const Reduce = ({ content }) => {
  return (
    <li>total of {content.reduce(function (accumulator, part){return accumulator+part.exercises;},0)} exercises</li>
  )
}

export default Reduce
