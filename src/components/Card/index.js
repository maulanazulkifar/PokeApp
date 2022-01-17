/** @jsxImportSource @emotion/react */
import {image, info, styles} from "./styles";
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();
    const HandleDetail = (name, id)=> {
        let tempPokemon = JSON.parse(localStorage.getItem('pokemon'));
        let owned = 0;
        tempPokemon.map(pokemon => {
            if (pokemon.id === id) {
                owned = pokemon.owned;
            }
            return true;
        })
        navigate('/pokemonDetail/', {
            state: {
                name,
                owned
            }
        });
    }
    return(
        <div css={styles} onClick={() => HandleDetail(props.name, props.id)}>
            <div css={info}>
                <div>{props.name.toUpperCase()}</div>
                <div>OWNED: 0</div>
            </div>
            <div>
                <img src={props.image} alt="" css={image}/>
            </div>
        </div>
    )
}

export default Card;