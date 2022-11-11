import React, { useState, useMemo, useRef } from 'react'
import wordsData from '../words/wordsData'
import LangButton from './LangButton'
import Word from './Word'
import Score from './Score'
import Results from './Results'
import { nanoid } from 'nanoid'

let randomLang;
let randomWord;
let langElements;
let finalScore;

const Quiz = () => {
    // Word counter
    const [count, setCount] = useState(1);
    const [score, setScore] = useState({
        "correctAnswers": 0,
        "wrongAnswers": 0
    });
    
    function updateScore(correctAnswer) {
        if (correctAnswer) {
            setScore({
                ...score,
                "correctAnswers": score.correctAnswers + 1
            });
        } else if (!correctAnswer) {
            setScore({
                ...score,
                "wrongAnswers": score.wrongAnswers + 1
            });
        }
    }
    
    function resetScore() {
        setScore({
            "correctAnswers": 0,
            "wrongAnswers": 0
        });
    }
    
    function updateCount() {
        if (count < 10) {
            setCount(prev => prev + 1);
        } else {
            setCount(1);
            resetScore();
        }
    }

    function getResults(finalResults) {
        finalScore = finalResults;
    }
    
    const setLangs = useMemo(() => {
        // Gets a random language id
        randomLang = Math.floor(Math.random() * wordsData.length);
        randomWord = Math.floor(Math.random() * wordsData[randomLang].words.length);
        let langNumbers = [];
        let randomNumber;

        // Checks if the number about to push equals the random lang id so buttons are not duplicated
        while (langNumbers.length < 3) {
            do {
                randomNumber = Math.floor(Math.random() * wordsData.length);
            } while (randomNumber === randomLang);
            
            langNumbers.indexOf(randomNumber) === -1 && langNumbers.push(randomNumber);
        }

        // Adds the correct button to a random position so it won't be guessed easily
        const randomPosition = Math.floor(Math.random() * wordsData.length);
        langNumbers.splice(randomPosition, 0, randomLang);

        langElements = langNumbers.map(langNumber => {
            const isCorrect = langNumber === randomLang;

            return (
                <LangButton
                    key={nanoid()}
                    language={langNumber}
                    isCorrect={isCorrect}
                    correctLang={wordsData[randomLang].lang}
                    count={count}
                    updateCount={updateCount}
                    updateScore={updateScore}
                />
            );
        });
    }, [count]);

    return (
        <div className='container'>
            <div className='quiz'>
                <Word lang={randomLang} id={randomWord} number={count} />
                {langElements}
            </div>

            <Score score={score.correctAnswers} getResults={getResults}/>

            <Results score={score.correctAnswers} finalScore={finalScore}/>
        </div>
    )
}

export default Quiz