import React from 'react';


const Question = ({question}) => {
  return (
    <div class="question-box--wrapper">
      <div class="question-box">
        <p>{question}</p>
      </div>
    </div>
  );
}

export default Question;
