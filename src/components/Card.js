import React, { Component } from 'react';
import CompleteCard from './CompleteCard'

class Card extends Component {
    constructor(){
        super()
        this.state={
            isShown: false
        }
    }

    displayMore = () => {
        this.setState(prevState=>({
            isShown: !prevState.isShown
        }))
    }

    render() {
        return (
            <div className='card-container'>
                <div id='card'>
                    <h1 id='card-header'>{this.props.base}-{this.props.target}</h1>
                    <div id='card-body'>
                        <p>Price: { this.props.price }</p>
                        <p>Change: { this.props.change }</p>
                        <p>Volume: { this.props.volume }</p>
                    </div>
                    <button id='more-info-button'onClick={ this.displayMore }>More Info</button>
                </div>
                { this.state.isShown && <CompleteCard key={ this.props.change + 1 } {...this.props} />} 
            </div>
        );
    }
}

export default Card;
