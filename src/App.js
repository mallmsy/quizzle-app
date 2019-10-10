import React from 'react';
import ProgressBar from './components/ProgressBar.js'
import Question from './components/Question.js'
import AnswersContainer from './components/AnswersContainer.js'
import Skip from './components/Skip.js'

import './App.css';

class App extends React.Component {

  state = {
    question: "How many cats does Mallory have?",
    answers: ["One", "Two Many", "Too Many", "Two"],
    correctAnswer: "Two",
    isAnswered: false
  }

  render() {
    return (
      <div className="main">
        <ProgressBar/>
        <Question question={this.state.question}/>
        <AnswersContainer answers={this.state.answers} correctAnswer={this.state.correctAnswer}/>
        <Skip/>
      </div>
    );
  }
}

export default App;
