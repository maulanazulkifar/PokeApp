import {useLocation, useNavigate} from 'react-router-dom';

const PokemonDetail = () => {
    const location = useLocation();
    const id =location.state.id;
    const navigate = useNavigate();
    const handleBack = ()=> {
        navigate('/')
    }
    return(
        <div>
            <div>Detail</div>
            <div>{id}</div>
            <button onClick={handleBack}>Back</button>
        </div>
    )
}
export default PokemonDetail;