import {useLocation, useNavigate} from 'react-router-dom';
import PokeDetailService from "../services/PokemonDetailService";

const PokemonDetail = () => {
    const location = useLocation();
    const name = location.state.name;
    const PokeDetail = PokeDetailService(name);
    console.log(PokeDetail);
    const navigate = useNavigate();
    const handleBack = ()=> {
        navigate('/')
    }
    return(
        <div>
            <div>Detail</div>{
            PokeDetail? <div>{PokeDetail.pokemon.name}</div>:<div>Loading</div>
        }
            <button onClick={handleBack}>Back</button>
        </div>
    )
}
export default PokemonDetail;