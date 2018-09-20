import React, { Component } from 'react';
import Image from './Image';
import puppies from '../images/puppies';

class Game extends Component {

    state = {
        images: puppies
    }

    shuffleImages = () => {
        let shuffled = this.shuffle(this.state.images);
        this.setState({
            images: shuffled
        });
    }

    shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.images.map((puppy, index) => {
                        return (
                            <Image resetGame={this.props.resetGame} shuffle={this.shuffleImages} score={this.props.increaseScore} key={puppy.id} src={puppy.src} />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Game;
