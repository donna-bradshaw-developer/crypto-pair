import React, { Component } from 'react';

class CompleteCard extends Component {

    render() {
        return (
            <div id='complete-container'>
                
                <h2>Markets</h2>

                <div id='market-container'>
                    { this.props.markets.length === 0 ?
                        <p>No Market Information Available</p>
                        :
                        this.props.markets.map((market, index)=>{
                            return <div className='individual-market' key={ index }>
                                    <p><span>{ index + 1}.</span><span> { market.market }</span></p>
                                    <p>Price: {market.price}</p>
                                    <p>Volume: {market.volume}</p>
                                </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default CompleteCard;