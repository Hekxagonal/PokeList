import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import * as S from "./styles";

interface Component {
  loadingState: {
    isError: boolean;
    error?: {
      message: string;
    };
  };
}

const Loading = ({ loadingState }: Component) => {
  const { isError, error } = loadingState;
  const {state} = useContext(ThemeContext)

  if (!isError) {
    return (
      <S.Container>
        <S.PokeBall>
          <S.PokeballBorder themeValue={state.theme}>
            <S.PokeBallButton themeValue={state.theme}/>
          </S.PokeballBorder>
        </S.PokeBall>
      </S.Container>
    );
  } else {
    return (
      <S.Container>
        <h1>{error?.message}</h1>
      </S.Container>
    );
  }
};

export default Loading;
