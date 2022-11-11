import React from 'react'
import $ from 'jquery'

const Results = (props) => {
    function hideResults() {
        $('.results').fadeOut(300, () => {
            $('.quiz').fadeIn(300);
            $('.score').fadeIn(300);
        });
    }

    let message;

    if (props.finalScore < 5) {
        message = `You scored ${props.finalScore} out of 10, try again!`;
    } else if (props.finalScore >= 5 && props.finalScore <= 7) {
        message = `Well done! You scored ${props.finalScore} out of 10`;
    } else {
        message = `Congratulations! You're a language expert! Final score: ${props.finalScore} / 10`;
    }

    return (
        <div className='results'>
            <h2>{message}</h2>
            <button onClick={hideResults}>Play again</button>
        </div>
    )
}

export default Results