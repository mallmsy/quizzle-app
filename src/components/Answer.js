import React from 'react';


const Answer = ({answer, index, collectAnswer, isAnswered}) => {
  let number = index + 1;
  return (
    <div>
      <div
      className={`answers-box__answer--${number}`}
      onClick={() => collectAnswer(index)}
      id={isAnswered ? "scaled-down" : "standard"}>
					<p>{answer}</p>
			</div>
    </div>
  );
}

export default Answer;
