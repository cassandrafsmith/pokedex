import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";


class Pokecard extends Component {
    render(){   
        const {id, name, type, base_experience } = this.props;
        let imgsrc = `${POKE_API}${id}.png`;           

        return ( 
        <div className="Pokecard">
            <h1>{name}</h1>
            <img src={imgsrc} alt={`${name}`}/>
            <h3>Type: {type}</h3>
            <h3>Exp: {base_experience}</h3>
        </div>
    )};
}

export default Pokecard;