import React, { Component } from 'react';
import './Pokecard.css';

//const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API2 ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

//ensures that the id contains three digits
let threeDigits = (num) => (num <= 999 ? `00${num}`.slice(-3) : num)

class Pokecard extends Component {
    render(){   
        const {id, name, type, base_experience } = this.props;
        let imgsrc = `${POKE_API2}${threeDigits(id)}.png`;           

        return ( 
        <div className="Pokecard">
            <h1 className="Pokecard-title">{name}</h1>
            <img src={imgsrc} alt={`${name}`}/>
            <h3 className="Pokecard-data">Type: {type}</h3>
            <h3 className="Pokecard-data">Exp: {base_experience}</h3>
        </div>
    )};
}

export default Pokecard;