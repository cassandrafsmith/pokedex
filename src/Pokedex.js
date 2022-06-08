import React, { Component } from 'react';
import Pokecard from './Pokecard.js';
import './Pokedex.css';

class Pokedex extends Component{
    
    render() {
        const winMessage = this.props.isWinner ? "Winner!" : "Loser!";

        //create <p> with the proper className for the winner and loser to use for styling
        let winTitle;
        if(this.props.isWinner){
            winTitle =  <h1 className="Pokedex-winner">{winMessage}</h1>;
        } else {
            winTitle = <h1 className="Pokedex-loser">{winMessage}</h1>;
        }

        return(
            <div className="Pokedex">
               <div className="Pokedex-heading">                   
                    {winTitle}
                   <h4 className="Pokedex-exp">Total Experience: {this.props.Exp}</h4>                    
               </div>
               <div className="Pokedex-cards">
                   {this.props.Pokemon.map((p) => (
                       <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />               
                    ))}
               </div>
            </div>
        )

    }
}

export default Pokedex;