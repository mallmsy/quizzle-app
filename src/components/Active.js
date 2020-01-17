import React from 'react';
import Question from './Question.js';
import AnswersContainer from './AnswersContainer.js';


const Active = ({currentQuestion, numQuestions, completed, collectAnswer, selectedAnswer, started}) => {
  return (
    <div id={started ? "open" : "collapse"}>
      <Question question={currentQuestion.question || ''}/>

      <AnswersContainer
      answers={currentQuestion.all_answers || []}
      correctAnswer={currentQuestion.correct_answer}
      collectAnswer={collectAnswer}
      selectedAnswer={selectedAnswer}/>
    </div>
  );
}

export default Active;
