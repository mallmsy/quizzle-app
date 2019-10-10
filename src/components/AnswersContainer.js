import React from 'react';
import Answer from './Answer';


const AnswersContainer = ({answers, correctAnswer}) => {
  return (
    <div className="answers-box-wrapper">
		  <div className="answers-box">
      {answers.map((answer, ind) =>
        <Answer answer={answer} index={ind} key={ind}/>
      )}
      </div>
    </div>
  );
}

export default AnswersContainer;
