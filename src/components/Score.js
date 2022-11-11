import React from 'react'

const Score = (props) => {
  props.getResults(props.score);

  return (
    <h4 className='score'>Score: {props.score}</h4>
  )
}

export default Score