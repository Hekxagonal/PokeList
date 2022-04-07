import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import * as types from '../../contexts/theme/actions'
import * as S from "./styles";

const Navbar = () => {
    const {state, dispatch} = useContext(ThemeContext)

    const handleTheme = () => {
        dispatch({type: types.CHARGE_THEME})
    }

    return (
        <S.Container data-testid='container' themeValue={state.theme}>
        <S.ColumnLeft>
            <S.Title>PokeList </S.Title>
            <S.Name>by Flavio : )</S.Name>
        </S.ColumnLeft>

        <S.ColumnRight>
            <S.PainterButton data-testid='themeButton' onClick={handleTheme} size="35px" />
        </S.ColumnRight>
        </S.Container>
    );
};

export default Navbar;
