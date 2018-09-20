import React, { Component } from 'react';

const imageStyle = {
    width: '200px'
}

const columnStyle = {
    margin: '25px 0px'
}

class Image extends Component {

    state = {
        guessed: false
    }

    handleImageClick = (event) => {
        if (!this.state.guessed) {
            this.setState({
                guessed: true
            })
            this.props.shuffle();
            this.props.score();
        } else {
            this.props.resetGame();
        }
    }

    render() {
        return (
            <div className="col-xs-4 col-sm-3" style={columnStyle}>
                <img onClick={this.handleImageClick} className="img-thumbnail" style={imageStyle} src={this.props.src} />
            </div>
        )
    }
}

export default Image;