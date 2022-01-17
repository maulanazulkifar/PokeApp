/** @jsxImportSource @emotion/react */
import {AbilityStyle} from "./style";

const Ability = (props) => {
    return(
        <div css={AbilityStyle}>
            <div>Ability</div>
            <div>{props.ability.map(skill => <div key={skill.ability.name}>{skill.ability.name}</div>)}</div>
        </div>
    )
}

export default Ability;