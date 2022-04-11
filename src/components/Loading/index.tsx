import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import * as S from "./styles";

type Component = {
    isError?: {
        message: string;
    }
}

const Loading = ({ isError }: Component) => {
  const {state} = useContext(ThemeContext)

  if (!isError) {
    return (
      <S.Container>
        <S.PokeBall data-testid="pokeBall">
          <S.PokeballBorder data-testid="ballBorder" themeValue={state.theme}>
            <S.PokeBallButton data-testid="ballButton" themeValue={state.theme}/>
          </S.PokeballBorder>
        </S.PokeBall>
      </S.Container>
    );
  } else {
    return (
      <S.Container>
        <h1>{isError?.message}</h1>
      </S.Container>
    );
  }
};

export default Loading;
