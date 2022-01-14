/** @jsxImportSource @emotion/react */
import {styles} from "./styles";
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();
    const HandleDetail = (id)=> {
        navigate('/pokemonDetail/', {
            state: {
                id
            }
        });
    }
    return(
        <div css={styles} onClick={() => HandleDetail(props.id)}>
            <div>
                <img src={props.image} alt=""/>
            </div>
            <div>{props.name.toUpperCase()}</div>
            <div>OWNED: 0</div>
        </div>
    )
}

export default Card;