import * as S from './styles'
import formatName from './format'

interface Component {
    name: string;
    types: (string | undefined)[];
    sprites: {
        front_default: string;
        back_shiny: string;
    };
}

const PokeProfile = ({ name, types, sprites }: Component) => {

    console.log(types)
    return (
        <S.Container>
            <S.FrontSprite src={sprites.front_default}/>
            <S.BackSprite src={sprites.back_shiny} />
            <h1>{formatName(name)}</h1>
            <S.TypesWrapper>
                {types.map((el, i) => <S.Type key={i}>{el?.toUpperCase()}</S.Type>)}
            </S.TypesWrapper>
        </S.Container>
    )
}


export default PokeProfile