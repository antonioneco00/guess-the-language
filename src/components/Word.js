import React from 'react'
import wordsData from '../words/wordsData'


const Word = (props) => {
  return (
    <div>
      <h2>In which language do you find this word?</h2>
      <h3>Word {props.number}: {wordsData[props.lang].words[props.id]}</h3>
    </div>
  )
}

export default Word