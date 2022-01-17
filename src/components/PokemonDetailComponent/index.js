/** @jsxImportSource @emotion/react */
import Index from "./ImageAndName";
import {page} from "./style";
import Ability from "./Ability";

const PokemonDetailComponent = (props) => {
    return(
        <div css={page}>
            <Index detail={props.detail.pokemon} owned={props.owned}/>
            <Ability ability={props.detail.pokemon.abilities}/>
            <div>About Pokemon</div>
            <div>Move</div>
        </div>
    )
}
export default PokemonDetailComponent;