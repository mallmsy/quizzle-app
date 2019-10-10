import React from 'react';
import ProgressBar from './components/ProgressBar.js';
import Question from './components/Question.js';
import AnswersContainer from './components/AnswersContainer.js';
import Skip from './components/Skip.js';
import quiz from './quiz.js';

import './App.css';

class App extends React.Component {

  state = {
    quiz: quiz,
    currentQuestion: quiz[0],
    isAnswered: false
  }

  skip = () => {
    let index = this.state.currentQuestion.id
    console.log("index", index)
    if (index >= 3) {
      this.setState({
        currentQuestion: quiz[0]
      })
    } else {
      this.setState({
        currentQuestion: quiz[index]
      })
    }
  }

  render() {
    return (

      <div className="main">
        <ProgressBar currentQuestion={this.state.currentQuestion.id}/>

        <Question question={this.state.currentQuestion.question}/>

        <AnswersContainer answers={this.state.currentQuestion.answers} correctAnswer={this.state.currentQuestion.correctAnswer}
        />

        <Skip skip={this.skip}/>
      </div>
    );
  }
}

export default App;
