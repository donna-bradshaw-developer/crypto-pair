import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div id='home-container'>
            <div id='picture'></div>
             <div id='home'>
               <h1 id='title'>Crypto-Pair</h1>
               <p>Vital cryptocurrency pair data at your fingertips.</p>
               <p>Search your favorite pairs for the latest market information.</p>
            </div>
            <Link to='/search'><button id='enter-button'>Enter</button></Link>
        </div>
    );
};

export default Home;
