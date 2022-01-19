/** @jsxImportSource @emotion/react */
import {AbilityStyle, listAbility} from "./style";
import {chips} from "../ImageAndName/style";

const Ability = (props) => {
    return(
        <div css={AbilityStyle}>
            <div>ABILITY</div>
            <div css={listAbility}>{props.ability.map(skill => <div key={skill.ability.name} css={chips}>{skill.ability.name.toUpperCase()}</div>)}</div>
        </div>
    )
}

export default Ability;