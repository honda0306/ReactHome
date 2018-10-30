import React, { Component } from 'react';

import './hero.css';

class Hero extends Component {
    render () {
        return (
            <div className={this.props.heroStyle}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Hero;