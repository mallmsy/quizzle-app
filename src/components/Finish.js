import React from 'react';


const Finish = ({numCorrect, numQuestions}) => {

  let kittens = ["zero", "one", "two", "three", "four"]
  let index;

  const score = numCorrect / numQuestions * 100;
  if (0 <= score && score <= 100) {
      if (score <= 20) {
          index = 0;
      } else if (score <= 40) {
          index = 1;
      } else if (score <= 60) {
          index = 2;
      } else if (score <= 80) {
          index = 3;
      } else if (score <= 100) {
        index = 4;
      }
  } else {
      alert("YOU BLEW IT");
  }

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
