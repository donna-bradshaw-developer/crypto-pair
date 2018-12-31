import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Card from './Card'

class Search extends Component {
    constructor(){
        super()
        this.state={
            firstCurrency: "",
            secondCurrency: '',
            userSearches:[],
            currencyData:[]
        }
    }

    handleChange = (e) =>{
        e.persist()
        this.setState(prevState => ({
            ...prevState,
            [ e.target.name ]: e.target.value
        }))
    }

    goHome =()=>{
        this.setState(()=>({
                firstCurrency: "",
                secondCurrency: '',
                userSearches:[],
                currencyData:[]
        }))
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        if(this.state.userSearches.length === 0){
            this.setState(prevState =>({
                ...prevState,
                userSearches: `${this.state.firstCurrency}-${this.state.secondCurrency}`,
            }))
        }else{
            this.setState(prevState =>({
                ...prevState,
                userSearches: [`${this.state.firstCurrency}-${this.state.secondCurrency}`, prevState.userSearches]
            }))
        }

        axios.get(`https://api.cryptonator.com/api/full/${this.state.firstCurrency}-${this.state.secondCurrency}`)
        .then(res => {
            if(this.state.currencyData.length === 0){
                this.setState(prevState =>({
                    ...prevState,
                    currencyData: res.data.ticker
                }));
            } else{
                this.setState(prevState =>({
                    ...prevState,
                    currencyData: [res.data.ticker, prevState.currencyData]
                }));
            }
        }).catch(error =>{
                console.log(error)
        })

        this.setState(prevState =>({
            ...prevState,
            firstCurrency: '',
            secondCurrency: '',
        }))
    }

    render() { 

        return (
            <div id="search-container">
                <Link to='/'><button id="back-home">Back to Home</button></Link>
                
                <div id='form'>
                    <form onSubmit={ this.handleSubmit }>
                        <input 
                            type='text' 
                            name='firstCurrency'
                            placeholder='Enter First Currency'
                            value= { this.state.firstCurrency }
                            onChange = { this.handleChange }
                        />
                        <input 
                            type='text' 
                            name='secondCurrency'
                            placeholder='Enter Second Currency'
                            value= { this.state.secondCurrency }
                            onChange = { this.handleChange }
                        />
                        <button id='submit-button'>Submit</button>
                    </form>
                    <p>Enter the currency codes in boxes above</p>
                    <p>A list of currency names and codes can be found <Link to="/list">here</Link></p>

                </div>

                <div id='pair-container'>
                    { this.state.currencyData.length > 1 ? 
                        this.state.currencyData.map((data, index)=>{
                            return  <Card key = { `${data.base} + ${index}` }
                                    base = { data.base }
                                    target = { data.target }
                                    price = { data.price }
                                    change = { data.change }
                                    markets = { data.markets }  
                                    volume = { data.volume } />})
                        :
                            <Card 
                                base = { this.state.currencyData.base }
                                target = { this.state.currencyData.target }
                                price = { this.state.currencyData.price }
                                change = { this.state.currencyData.change }
                                markets = { this.state.currencyData.markets} 
                                volume = { this.state.currencyData.volume }/>
                    }
                </div>
            </div>
        );
    }
}

export default Search;