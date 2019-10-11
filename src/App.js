import React from 'react';
// import Fragment from 'react';

import ProgressBar from './components/ProgressBar.js';
import Next from './components/Next.js';
import Finish from './components/Finish.js';
import Active from './components/Active.js';
import quiz from './quiz.js';

import './App.css';

class App extends React.Component {

  state = {
    currentQuestion: quiz[0],
    numQuestions: quiz.length,
    selectedAnswer: null,
    numCorrect: 0,
    completed: false
  }

  next = (e) => {
    if (e.target.innerText === 'FINISH') {
      this.setState({
        completed: true,
        currentQuestion: 0,
        selectedAnswer: null
      })
      return
    }

    let index = this.state.currentQuestion.id

    if (index >= this.state.numQuestions) {
      this.setState({
        currentQuestion: quiz[0],
        selectedAnswer: null
      })
    } else {
      this.setState({
        currentQuestion: quiz[index],
        selectedAnswer: null
      })
    }
  }

  collectAnswer = (index) => {
    if (index === this.state.currentQuestion.correctAnswer) {
      this.setState({
        numCorrect: this.state.numCorrect + 1,
        selectedAnswer: index
      })
    } else {
      this.setState({
        selectedAnswer: index
      })
    }
  }

  render() {
    return (
      <div className="main">
        <ProgressBar
        currentQuestion={this.state.currentQuestion}
        numQuestions={this.state.numQuestions}/>

        {this.state.completed
          ?
          <Finish
          numQuestions={this.state.numQuestions}
          numCorrect={this.state.numCorrect}/>
          :
          <Active
          currentQuestion={this.state.currentQuestion}
          numQuestions={this.state.numQuestions}
          completed={this.state.completed}
          collectAnswer={this.collectAnswer}
          selectedAnswer={this.state.selectedAnswer}/>
        }
          <Next
          next={this.next}
          numQuestions={this.state.numQuestions}
          currentQuestion={this.state.currentQuestion}
          completed={this.state.completed}/>
      </div>
    );
  }
}

export default App;
