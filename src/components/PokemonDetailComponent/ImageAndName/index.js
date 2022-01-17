/** @jsxImportSource @emotion/react */
import {chips, ImageAndNameStyle, ImageStyle, type} from "./style";

const ImageAndName = (props) => {
    const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.detail.id}.svg`;
    const catchPokemon = (item) =>{
        const detail = JSON.parse(JSON.stringify(item))
        let tempPokemon = JSON.parse(localStorage.getItem('pokemon'));
        detail.owned = 1;
        if (!tempPokemon) {
            tempPokemon = [];
            tempPokemon.push(detail);
        } else {
            tempPokemon.map(pokemon => {
                console.log(pokemon)
                if (pokemon.id === detail.id) {
                    pokemon.owned = pokemon.owned + detail.owned;
                } else {
                    tempPokemon.push(detail);
                }
                return true;
            })
        }
        console.log(detail);
        console.log(tempPokemon);
        localStorage.setItem('pokemon', JSON.stringify(tempPokemon));
    };
    return(
        <div css={ImageAndNameStyle}>
            <img src={imageLink} alt="" css={ImageStyle}/>
            <div>{props.detail.name.toUpperCase()}</div>
            <div css={type}>{
                props.detail.types.map(types => <div key={types.type.name} css={chips}>{types.type.name.toUpperCase()}</div>)
            }</div>
            <div>Owned: {props.owned}</div>
            <div>
                <button onClick={()=>catchPokemon(props.detail)}>catch</button>
            </div>
        </div>
    )
}
export default ImageAndName;