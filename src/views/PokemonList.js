/** @jsxImportSource @emotion/react */
import {useState} from "react";
import PokemonListService from "../services/PokemonListService";
import Card from "../components/Card";
import Loading from "../components/Loading";
import {button, pagination, PokemonListStyle} from "./PokemonListStyle";

const PokemonList = () => {
    let tempPokemon = JSON.parse(localStorage.getItem('pokemon'));
    const [limit] = useState(9)
    const [offset, setOffset] = useState(0)
    const Pokelist = PokemonListService(limit, offset);
    let Poke = null;
    if (Pokelist) {
        Poke = Pokelist.pokemons.results;
    }
    const nextPokemon = ()=> {
        setOffset(offset+9);
    }
    const previousPokemon = ()=> {
        setOffset(offset-9);
    }
    return (
        <div>
            <div css={PokemonListStyle}>
                {Poke ? Poke.map((item)=> {
                    let tempOwned = 0;
                    if (tempPokemon) {
                        tempPokemon.map(data => {
                            if (data.id === item.id) {
                                tempOwned = data.owned;
                            }
                            return true;
                        });
                    }
                    return <Card name={item.name} image={item.dreamworld} key={item.name} id={item.id} owned={tempOwned?tempOwned:null}/>
                }): <Loading/>}
            </div>
            <div css={pagination}>
                {
                    offset === 0 ? <></>
                        : <button onClick={() => previousPokemon()} css={button}>Previous</button>
                }
                <button onClick={() => nextPokemon()} css={button}>Next</button>
            </div>
        </div>
    )
}

export default PokemonList;