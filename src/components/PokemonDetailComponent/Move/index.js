/** @jsxImportSource @emotion/react */
import {ListMove, MoveStyle} from "./style";
import {chips} from "../ImageAndName/style";

const Move = (props)=> {
    return (
        <div css={MoveStyle}>
            <div>MOVE</div>
            <div css={ListMove}>{
                props.moves.map(move => <div key={move.move.name} css={chips}>{move.move.name}</div>)
            }</div>
        </div>
    )
}
export default Move;