/** @jsxImportSource @emotion/react */
import Index from "./ImageAndName";
import {page} from "./style";
import Ability from "./Ability";
import Move from "./Move";

const PokemonDetailComponent = (props) => {
    return(
        <div css={page}>
            <Index detail={props.detail.pokemon} owned={props.owned}/>
            <Ability ability={props.detail.pokemon.abilities}/>
            <Move moves={props.detail.pokemon.moves}/>
        </div>
    )
}
export default PokemonDetailComponent;