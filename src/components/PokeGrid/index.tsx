import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import Loading from "../Loading";
import PokeProfile from "../Poke";
import * as S from "./styles";

type iTypes = [
  {
    type: {
      name: string;
    };
  },
  {
    type: {
      name: string;
    };
  }?
];

type Props = {
    list: any[]
    pages: {previous: boolean, next: boolean},
    isError?: {
        message: string
    }
}

const PokeGrid = ({ list, pages, isError } : Props) => {
  const {state} = useContext(ThemeContext)

  const handleTypes = (rawTypes: iTypes) => {
    const result = [rawTypes[0].type.name, rawTypes[1]?.type.name];
    return result.filter((el) => (el ? true : false));
  };

  if (!isError) {
    return (
      <S.Container>
        <S.PokeWrapper>
          {list.map((el, i) => {
            return (
              <PokeProfile
                data-testid='pokeprofile'
                key={i}
                name={el.name}
                types={handleTypes(el.types)}
                sprites={el.sprites}
                anim={i}
              />
            );
          })}
        </S.PokeWrapper>
        <S.Navigation>
          {pages.previous && <S.PageLeft themevalue={state.theme} size="50px" />}
          {pages.next && <S.PageRight themevalue={state.theme} size="50px" />}
        </S.Navigation>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Loading isError={isError} />
    </S.Container>
  );
};

export default PokeGrid;
