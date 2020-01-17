import React from 'react';
import Answer from './Answer';


const AnswersContainer = ({answers, correctAnswer, collectAnswer, selectedAnswer}) => {
  // debugger
  return (
    <div className="answers-box-wrapper">
		  <div className="answers-box">
      {answers.map((answer, index) =>
        <Answer
        answer={answer}
        index={index}
        collectAnswer={collectAnswer}
        selectedAnswer={selectedAnswer}
        key={index}
        />
      )}
      </div>
    </div>
  );
}

export default AnswersContainer;
