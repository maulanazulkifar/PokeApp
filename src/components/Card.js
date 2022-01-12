/** @jsxImportSource @emotion/react */
import {cardStyle} from "./CardStyle";

const Card = (props) => {
    return(
        <div css={cardStyle}>
            <div>
                <img src={props.image} alt=""/>
            </div>
            <div>{props.name}</div>
        </div>
    )
}

export default Card;