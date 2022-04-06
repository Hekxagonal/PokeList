import * as S from './styles'
import formatName from './format'
import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/theme';

interface Component {
    name: string;
    types: (string | undefined)[];
    sprites: {
        front_default: string;
        back_shiny: string;
    };
    anim: number;
}

const PokeProfile = ({ name, types, sprites, anim }: Component) => {
    const [animDelay] = useState(() => {
        if (anim === 0) return 0.1
        return anim * 0.1
    })
    const {state} = useContext(ThemeContext)

    return (
        <S.Container themeValue={state.theme} anim={animDelay.toString()}>
            <S.FrontSprite src={sprites.front_default}/>
            <S.BackSprite src={sprites.back_shiny} />
            <S.PokeName themeValue={state.theme}>{formatName(name)}</S.PokeName>
            <S.TypesWrapper>
                {types.map((el, i) => <S.Type key={i}>{el?.toUpperCase()}</S.Type>)}
            </S.TypesWrapper>
        </S.Container>
    )
}


export default PokeProfile