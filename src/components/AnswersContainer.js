import React from 'react';
import Answer from './Answer';


const AnswersContainer = ({answers, correctAnswer, collectAnswer, isAnswered}) => {
  return (
    <div className="answers-box-wrapper">
		  <div className="answers-box">
      {answers.map((answer, ind) =>
        <Answer
        answer={answer}
        index={ind}
        collectAnswer={collectAnswer}
        isAnswered={isAnswered}
        key={ind}
        />
      )}
      </div>
    </div>
  );
}

export default AnswersContainer;
