import React from 'react';
import Question from './Question.js';
import AnswersContainer from './AnswersContainer.js';


const Active = ({currentQuestion, numQuestions, completed, collectAnswer, selectedAnswer}) => {
  return (
    <div>
      <Question question={currentQuestion.question}/>

      <AnswersContainer answers={currentQuestion.answers} correctAnswer={currentQuestion.correctAnswer}
      collectAnswer={collectAnswer}
      selectedAnswer={selectedAnswer}/>
    </div>
  );
}

export default Active;
