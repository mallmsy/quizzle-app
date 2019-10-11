import React from 'react';


const Answer = ({answer, index, collectAnswer, selectedAnswer}) => {
  let number = index + 1;
  return (
      <div
      className={`answers-box__answer--${number}`}
      onClick={() => collectAnswer(index)}
      id={selectedAnswer === index ? "clicked" : null}>
					<p>{answer}</p>
			</div>
  );
}

export default Answer;
