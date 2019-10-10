import React from 'react';

const ProgressBar = ({currentQuestion}) => {
  let percentage = currentQuestion / 3 * 100;
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

        <h2 className="question-number">
  		    Question {currentQuestion} of 3
  	   </h2>
      </div>
  );
}

export default ProgressBar;
