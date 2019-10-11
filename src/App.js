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
    isAnswered: false,
    numCorrect: 0,
    completed: false
  }

  next = (e) => {
    if (e.target.innerText === 'FINISH') {
      this.setState({
        completed: true,
        currentQuestion: 0
      })
      return
    }

    let index = this.state.currentQuestion.id

    if (index >= this.state.numQuestions) {
      this.setState({
        currentQuestion: quiz[0]
      })
    } else {
      this.setState({
        currentQuestion: quiz[index]
      })
    }
  }

  collectAnswer = (index) => {
    if (index === this.state.currentQuestion.correctAnswer) {
      console.log("CORRECT!")
      this.setState({
        isAnswered: true,
        numCorrect: this.state.numCorrect + 1
      })
    } else {
      this.setState({
        isAnswered: true
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
          <Finish/>
          :
          <Active
          currentQuestion={this.state.currentQuestion}
          numQuestions={this.state.numQuestions}
          isAnswered={this.state.isAnswered}
          completed={this.state.completed}
          collectAnswer={this.collectAnswer}/>
        }
          <Next
          next={this.next}
          isAnswered={this.state.isAnswered}
          numQuestions={this.state.numQuestions}
          currentQuestion={this.state.currentQuestion}
          completed={this.state.completed}/>
      </div>
    );
  }
}

export default App;
