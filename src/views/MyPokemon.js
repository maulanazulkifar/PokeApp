/** @jsxImportSource @emotion/react */
import Card from "../components/Card";
import {MyPokemonStyle} from "./MyPokemonStyle";
import {useState} from "react";

const MyPokemon = () => {
    let tempPokemon = JSON.parse(localStorage.getItem('pokemon'));
    const [pokemon] = useState(tempPokemon);
    return(
        <div css={MyPokemonStyle}>{
         tempPokemon ? pokemon.map(item =>  <Card name={item.name} key={item.name} id={item.id} owned={item.owned} mode='pocket'/>)
             :<div>Tidak Ada Pokemon</div>
        }</div>
    )
};

export default MyPokemon;