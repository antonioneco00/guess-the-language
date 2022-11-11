import React, { useState } from 'react'
import wordsData from '../words/wordsData'
import $ from 'jquery'

const LangButton = (props) => {
  const [correct, setCorrect] = useState('');

  function check() {
    setCorrect(props.isCorrect ? 'correct' : 'incorrect');

    $('.btn').attr('disabled', 'disabled');
    
    if (props.isCorrect) {
      props.updateScore(true);
    } else {
      showCorrect();
      props.updateScore(false);
    }
    
    if (props.count == 10) {
      $('.score').delay(1000).fadeOut(300);
    }

    $('.quiz').delay(1000).fadeOut(300, () => {
      props.updateCount();

      props.count < 10 ? $('.quiz').fadeIn(300) : $('.results').fadeIn(300);
    });
  }

  function showCorrect() {
    $('.btn').each(function() {
      if ($(this).text() == props.correctLang) {
        $(this).addClass('correct');
      }
    });
  }

  return (
    <button className={`btn ${correct}`} onClick={check}>{wordsData[props.language].lang}</button>
  )
}

export default LangButton