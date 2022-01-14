/** @jsxImportSource @emotion/react */
import {Link} from "react-router-dom";
import {Style, ImageStyle, LinkStyle, NavStyle, TitleStyle} from "./style";

const Header = () => {
    return(
        <div
            css={Style}
        >
            <div
                css={TitleStyle}
            >
                <img
                    src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png"
                    alt=""
                    css={ImageStyle}
                />
            </div>
            <nav css={NavStyle}>
                <Link to="/" css={LinkStyle}>List Pokemon</Link>
                <Link to="/myPokemon" css={LinkStyle}>My Pocket</Link>
            </nav>
        </div>
    )
}

export default Header;