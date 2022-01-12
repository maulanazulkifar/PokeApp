/** @jsxImportSource @emotion/react */
import {cardStyle} from "./CardStyle";
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();
    const handleDetail = ()=> {
        navigate('/pokemonDetail');
    }
    return(
        <div css={cardStyle} onClick={handleDetail}>
            <div>
                <img src={props.image} alt=""/>
            </div>
            <div>{props.name.toUpperCase()}</div>
            <div>OWNED: 0</div>
        </div>
    )
}

export default Card;