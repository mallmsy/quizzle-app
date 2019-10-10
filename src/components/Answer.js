import React from 'react';


const Answer = ({answer, index}) => {
  let number = index + 1;
  return (
    <div className={`answers-box__answer--${number}`}>
					<p>{answer}</p>
			</div>
  );
}

export default Answer;
