import * as S from './styles';

interface Component {
  sprites: {
    back_default: string;
    back_female?: string;
    back_shiny: string;
    back_shiny_female?: string;
    front_default: string;
    front_female?: string;
    front_shiny: string;
    front_shiny_female?: string;
  };
  gender: { male: boolean; female: boolean };
}

const PokeProfile = ({ sprites, gender }: Component) => {
  const {
    back_default,
    back_female,
    back_shiny,
    back_shiny_female,
    front_default,
    front_female,
    front_shiny,
    front_shiny_female,
  } = sprites;
  return (
    <S.Container>
      <S.Column>
        {gender.male && (
          <S.SpritesWrapper>
            Male:
            {front_default && <S.SpriteFront src={front_default} />}
            {back_shiny && <S.SpriteBack src={back_shiny} />}
            {front_shiny && <S.SpriteFront src={front_shiny} />}
            {back_default && <S.SpriteBack src={back_default} />}
          </S.SpritesWrapper>
        )}
        {gender.female && (
          <S.SpritesWrapper>
            Female:
            {front_female && (
              <S.SpriteFront src={front_female || front_default} />
            )}
            {back_shiny_female && (
              <S.SpriteBack src={back_shiny_female || back_shiny} />
            )}
            {front_shiny_female && (
              <S.SpriteFront src={front_shiny_female || front_shiny} />
            )}
            {back_female && <S.SpriteBack src={back_female || back_default} />}
          </S.SpritesWrapper>
        )}
      </S.Column>
      <S.Column>description</S.Column>
    </S.Container>
  );
};

export default PokeProfile;
