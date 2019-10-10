import React from 'react';
import Answer from './Answer';


const AnswersContainer = ({answers, correctAnswer}) => {
  return (
    <div class="answers-box-wrapper">
		  <div class="answers-box">
      {answers.map((answer, ind) =>
        <Answer answer={answer} index={ind}/>
      )}
      </div>
    </div>
  );
}

export default AnswersContainer;
