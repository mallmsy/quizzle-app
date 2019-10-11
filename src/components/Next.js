import React from 'react';


const Next = ({next, numQuestions, currentQuestion, completed}) => {
  return (
    <div className="next-button-wrapper">
      {completed ? null :
	       <div className="next-button" onClick={(e) => next(e)}>
		       <p>{currentQuestion.id >= numQuestions ? "Finish" : "Next"}</p>
	       </div>
       }
    </div>
  );
}

export default Next;
