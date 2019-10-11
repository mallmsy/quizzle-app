import React from 'react';


const Finish = () => {
  return (
    <div>
      <div className="question-box--wrapper">
        <div className="question-box">
          <p>You completed some questions!</p>
          <img className="catmoji" src="../img/four.png" alt="kitten emoji"/>
        </div>
      </div>
      <div className="next-button-wrapper">
  	     <div className="next-button" onClick={() => window.location.reload()}>
  		       <p>Try Again</p>
  	       </div>
      </div>
    </div>
  );
}

export default Finish;
