import * as S from './styles'
import formatName from './format'
import { useState } from 'react';

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
    return (
        <S.Container anim={animDelay.toString()}>
            <S.FrontSprite src={sprites.front_default}/>
            <S.BackSprite src={sprites.back_shiny} />
            <S.PokeName>{formatName(name)}</S.PokeName>
            <S.TypesWrapper>
                {types.map((el, i) => <S.Type key={i}>{el?.toUpperCase()}</S.Type>)}
            </S.TypesWrapper>
        </S.Container>
    )
}


export default PokeProfile