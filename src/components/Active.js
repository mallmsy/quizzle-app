import React from 'react';
import Question from './Question.js';
import AnswersContainer from './AnswersContainer.js';


const Active = ({currentQuestion, numQuestions, isAnswered, completed, collectAnswer}) => {
  return (
    <div>
      <Question question={currentQuestion.question}/>

      <AnswersContainer answers={currentQuestion.answers} correctAnswer={currentQuestion.correctAnswer}
      collectAnswer={collectAnswer}
      isAnswered={isAnswered}
      />

    </div>
  );
}

export default Active;
