import { useEffect, useState } from "react";
import PokeProfile from "../Poke";
import loadResults from "./load-results";
import * as S from "./styles";

type iList = Array<any>;

interface iDefaultText {
  text: string;
  error: { message: string } | undefined;
}

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

const PokeGrid = () => {
  const [list, setList] = useState<iList>([]);
  const [LoadingState, setLoadingState] = useState<iDefaultText>({
    text: "Loading",
    error: undefined,
  });

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const json = await data.json();
        const results = json.results.map(async (el: Object) => {
          const poke = await loadResults(el);
          return poke;
        });
        Promise.all(results).then((result) => setList(result));
      } catch (e: any) {
        setLoadingState({ text: "Erro na API", error: e });
      }
    };
    load();
  }, []);

  const handleTypes = (rawTypes: iTypes) => {
    const result = [rawTypes[0].type.name, rawTypes[1]?.type.name];
    return result.filter((el) => (el ? true : false));
  };

  if (list.length !== 0) {
    return (
      <S.Container>
        <S.PokeWrapper>
          {list.map((el) => {
            return (
              <PokeProfile
                name={el.name}
                types={handleTypes(el.types)}
                sprites={el.sprites}
              />
            );
          })}
        </S.PokeWrapper>
        <S.Navigation>
          <S.PageButton>{"<"}</S.PageButton>
          <S.PageButton>{">"}</S.PageButton>
        </S.Navigation>
      </S.Container>
    );
  }

  return (
    <S.Container>
      {LoadingState.text}
      <br />
      {LoadingState.error?.message}
    </S.Container>
  );
};

export default PokeGrid;
