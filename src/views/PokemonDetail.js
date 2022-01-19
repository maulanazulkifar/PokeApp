/** @jsxImportSource @emotion/react */
import {useLocation, useNavigate} from 'react-router-dom';
import PokeDetailService from "../services/PokemonDetailService";
import Loading from "../components/Loading";
import PokemonDetailComponent from "../components/PokemonDetailComponent";
import {button} from "./PokemonListStyle";

const PokemonDetail = () => {
    const location = useLocation();
    const name = location.state.name;
    const owned = location.state.owned;
    const PokeDetail = PokeDetailService(name);
    const navigate = useNavigate();
    const handleBack = ()=> {
        navigate('/')
    }
    return(
        <div>
            {
            PokeDetail? <PokemonDetailComponent detail={PokeDetail} owned={owned}/>
                :<Loading/>
        }
            <button onClick={handleBack} css={button}>Back</button>
        </div>
    )
}
export default PokemonDetail;