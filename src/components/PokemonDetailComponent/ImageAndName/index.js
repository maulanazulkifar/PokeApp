/** @jsxImportSource @emotion/react */
import {chips, ImageAndNameStyle, ImageStyle, type} from "./style";
import {useState} from "react";

const ImageAndName = (props) => {
    let tempPokemon = JSON.parse(localStorage.getItem('pokemon'));
    const [owned, setOwned] = useState(props.owned? props.owned:0);
    const [success, setSuccess] = useState(null);
    if (tempPokemon) {
        const choosenPokemon = tempPokemon.find(data=> data.id === props.detail.id);
        if (choosenPokemon) {
        }
    }
    const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.detail.id}.svg`;
    const catchPokemon = (item) => {
        const detail = JSON.parse(JSON.stringify(item));
        detail.owned = 1;
        const random_boolean = Math.random() < 0.5;
        if (random_boolean) {
            if (!tempPokemon) {
                tempPokemon = [];
                tempPokemon.push(detail);
            } else {
                let cachePokemon = null;
                tempPokemon.forEach(data => {
                    if (data.id === props.detail.id) {
                        cachePokemon = data;
                    }
                });
                if (cachePokemon) {
                    cachePokemon.owned = detail.owned +cachePokemon.owned;
                        setOwned(cachePokemon.owned);
                } else {
                    setOwned(1);
                    tempPokemon.push(detail);
                }
            }
            localStorage.setItem('pokemon', JSON.stringify(tempPokemon));
            setSuccess('Berhasil')
        } else {
            setSuccess('Gagal')
        }
    }
    return(
        <div css={ImageAndNameStyle}>
            <img src={imageLink} alt="" css={ImageStyle}/>
            <div>{props.detail.name.toUpperCase()}</div>
            <div css={type}>{
                props.detail.types.map(types => <div key={types.type.name} css={chips}>{types.type.name.toUpperCase()}</div>)
            }</div>
            <div>Owned: {owned}</div>
            <div>{success !== null ?success:''}</div>
            <div>
                <button onClick={() => catchPokemon(props.detail)}>catch</button>
            </div>
        </div>
    )
}
export default ImageAndName;