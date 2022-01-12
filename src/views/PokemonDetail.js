import { useNavigate } from 'react-router-dom';

const PokemonDetail = () => {
    const navigate = useNavigate();
    const handleBack = ()=> {
        navigate('/')
    }
    return(
        <div>
            <div>Detail</div>
            <button onClick={handleBack}>Back</button>
        </div>
    )
}
export default PokemonDetail;