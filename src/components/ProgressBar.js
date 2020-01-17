import React from 'react';

const ProgressBar = ({currentQuestion, numQuestions, started, index}) => {
  let percentage = index / numQuestions * 100;
  return (

    <div>
      <div className="progress-bar__wrapper" id={started ? "" : "collapse"}>
          <div className="progress-bar">
            <div
            className="progress-bar--overlay"
            style={{width: `${percentage}%`}}>
            </div>
          </div>
        </div>
        {currentQuestion ?

        <h2 className="question-number">
  		    Question {index} of {numQuestions}
  	   </h2>
        : null}
      </div>
  );
}

export default ProgressBar;
