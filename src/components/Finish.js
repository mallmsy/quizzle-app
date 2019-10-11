import React from 'react';


const Finish = ({numCorrect, numQuestions}) => {

  let kittens = ["zero", "one", "two", "three", "four"]
  let index;

  if (numQuestions - numCorrect > 2) {
    index = 1
  } else {
    index = 3
  };

  return (
    <div>
      <div className="question-box--wrapper">
        <div className="question-box">
          <p id="exclaim">{index <= 2 ? "SHOOT!" : "HOORAY!"}</p>
          <p>You answered {numCorrect} out of {numQuestions} questions correctly!</p>
          <img className="catmoji" src={`../img/${kittens[index]}.png`} alt="kitten emoji"/>
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
