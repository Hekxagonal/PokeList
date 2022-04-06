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

  if (!isError) {
    return (
      <S.Container>
        <S.PokeballBorder>
          <S.PokeBallButton />
        </S.PokeballBorder>
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
