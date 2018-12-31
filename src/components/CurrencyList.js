import React from 'react';
import List from './list.json'
import {Link} from 'react-router-dom'

const CurrencyList = () => {
    return (
        <div id='currency-container'>
            <div id='currency-header'>
                <h1>Currency List</h1>
                <p>Name of coin : Coin Code</p>
                <p>The coin code is what is entered into the search box</p>
                <Link to='/search'><button className="back-search">Back To Search</button></Link>
            </div>
            <div id="currency-list">
                { List.rows.map((item, index)=>{
                    return <div>{index + 1}. { item.name }: { item.code }</div>
                })}
            </div>
            <Link to='/search'><button class="back-search">Back To Search</button></Link>
        </div>
    );
};

export default CurrencyList;