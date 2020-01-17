import React from 'react';
// import Fragment from 'react';

import ProgressBar from './components/ProgressBar.js';
import Next from './components/Next.js';
import Finish from './components/Finish.js';
import Welcome from './components/Welcome.js';
import Active from './components/Active.js';
import quiz from './quiz.js';

import setObject from './helpers';

import './App.css';

class App extends React.Component {
  
  state = {
    allQuestions: [],
    currentQuestion: '',
    numQuestions: 0,
    selectedAnswer: '',
    numCorrect: 0,
    completed: false,
    started: false
  }
  
  componentDidMount = () => {
    fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple')
    .then(res => res.json())
    .then(json => json.results.map(el => setObject(el)))
    .then(allQuestions => this.setState({
      allQuestions: allQuestions,
      currentQuestion: allQuestions[0],
      numQuestions: allQuestions.length
      }))
  }

  begin = () => {
    this.setState({
      started: true
    })
  }

  submitAnswer = () => {
    if (this.state.selectedAnswer === this.state.currentQuestion.correct_answer) {
      this.setState({
        numCorrect: this.state.numCorrect + 1
      })
    }
  }

  next = (e) => {

    this.submitAnswer();

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
  collectAnswer = (answer) => {
      this.setState({
        selectedAnswer: answer
      })
  }

  render() {
    console.log("STATE STATE STATE: ", this.state)
    return (
      <div className="main">
        <Welcome begin={this.begin} started={this.state.started}/>

        <ProgressBar
        currentQuestion={this.state.currentQuestion}
        numQuestions={this.state.numQuestions}
        started={this.state.started}
        index={this.state.allQuestions.indexOf(this.state.currentQuestion)}
        />

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
          selectedAnswer={this.state.selectedAnswer}
          started={this.state.started}/>
        }
          <Next
          next={this.next}
          numQuestions={this.state.numQuestions}
          currentQuestion={this.state.currentQuestion}
          completed={this.state.completed}
          started={this.state.started}/>
      </div>
    );
  }
}

export default App;
