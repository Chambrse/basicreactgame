import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Game from './components/Game';

class App extends Component {

  state = {
    score: 0,
    topScore: 0
  }

  increaseScore = () => {
    this.setState({
      score: this.state.score + 1,
    });
    if (this.state.score >= this.state.topScore) {
      this.setState({
        topScore: this.state.topScore + 1
      });
    };
  }

  resetGame = () => {
    this.setState({
      score: 0,
      topScore: 0
    })
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Game resetGame={this.resetGame} increaseScore={this.increaseScore} />
      </div>
    )
  }
}

export default App;
