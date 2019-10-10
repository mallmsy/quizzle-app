import React from 'react';


const Question = ({question}) => {
  return (
    <div className="question-box--wrapper">
      <div className="question-box">
        <p>{question}</p>
      </div>
    </div>
  );
}

export default Question;
