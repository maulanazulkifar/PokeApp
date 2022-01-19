/** @jsxImportSource @emotion/react */
import {buttonRelease, image, info, styles} from "./styles";
import { useNavigate } from 'react-router-dom';
import {useState} from "react";

const Card = (props) => {
    const navigate = useNavigate();
    let tempPokemon = JSON.parse(localStorage.getItem('pokemon'));
    const [owned, setOwned] = useState(props.owned? props.owned:0);
    const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`;
    const HandleDetail = (name, owned)=> {
        navigate('/pokemonDetail/', {
            state: {
                name,
                owned
            }
        });
    }
    const HandleRelease = (id) => {
        tempPokemon.forEach(data => {
            if (data.id === id) {
                if (data.owned === 1) {
                    data.owned -= 1;
                    tempPokemon = tempPokemon.filter(data => data.id !== id);
                    navigate('/');
                } else {
                    data.owned -= 1;
                }
            }
            setOwned(data.owned);
        })
        localStorage.setItem('pokemon', JSON.stringify(tempPokemon));
    }
    return(
        <div>
            <div css={styles} onClick={() => HandleDetail(props.name, props.owned)}>
                <div css={info}>
                    <div>{props.name.toUpperCase()}</div>
                    <div>OWNED: {owned}</div>
                </div>
                <div>
                    <img src={props.image? props.image:imageLink} alt="" css={image}/>
                </div>
            </div>
            <div css={buttonRelease}>{
                props.mode === 'pocket'?<button onClick={() => HandleRelease(props.id)}>Release</button>:''
            }</div>
        </div>
    )
}

export default Card;