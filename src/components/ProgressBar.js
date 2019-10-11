import React from 'react';

const ProgressBar = ({currentQuestion, numQuestions}) => {
  let percentage = currentQuestion.id / numQuestions * 100;
  return (

    <div>
      <div className="progress-bar__wrapper">
          <div className="progress-bar">
            <div
            className="progress-bar--overlay"
            style={{width: `${percentage}%`}}>
            </div>
          </div>
        </div>
        {currentQuestion ?

        <h2 className="question-number">
  		    Question {currentQuestion.id} of {numQuestions}
  	   </h2>
        : null}
      </div>
  );
}

export default ProgressBar;
