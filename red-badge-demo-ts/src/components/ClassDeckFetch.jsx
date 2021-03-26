import React, { Component } from 'react';

class ClassDeckFetch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            deckID: "",
            card_img: ""
        }
    }

    fetchDeck(){
        const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

        fetch(url)
        .then(res => res.json())
        .then(json => this.setState({deckID: json.deck_id}))
    }

    fetchCard(){
        const url = `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2`;

        fetch(url)
        .then(res => res.json())
        .then(json => this.setState({
            card_img: json.cards[0].image 
        }))
    }

    componentDidMount(){
        this.fetchDeck();
    }

    componentDidUpdate(prevProps, prevState) {
        
        if(prevState.deckID !== this.state.deckID){
            this.fetchCard();
        }
        
    }


    render() { 
        return ( 
            <>
                <img src={this.state.card_img} alt=""/>
                
            </>
         );
    }
}
 
export default ClassDeckFetch;